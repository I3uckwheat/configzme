const mongoose = require('mongoose');
const User = mongoose.model('User');
const File = mongoose.model('File');

exports.getAllFiles = async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("files");
  res.json(user.files);
}

exports.getFile = async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("files")
  const file = user.files.find(file => file.name === req.params.file);
  if (!file) {
    return res.sendStatus(404);
  } else {
    return res.send(file.contents);
  }
}

exports.addFile = async (req, res, next) => {
  if(!req.file) { 
    return res.status(400).send("err_no_file_attached"); 
  }

  const fileContents = req.file.buffer.toString();
  if(fileContents === "") {
    return res.status(400).send("err_empty_file_attached");
  }

  const user = await User.findById(req.user.id).populate("files");
  const existingUserFileNames = user.files.map(file => file.name);

  if(!existingUserFileNames.includes(req.params.file)) {
    const file = new File({
      name: req.params.file,
      contents: fileContents,
      user: user.id
    });
    user.files.push(file._id),

    await Promise.all([
      file.save(),
      user.save()
    ]);

    res.sendStatus(200);
  } else {
    res.status(400).send("err_file_already_exists");
  }
}

exports.updateFile = async (req, res, next) => {
  try {
    const subDocumentId = req.user.files.find(file => file.name === req.params.file)._id;
    const fileContents = req.file.buffer.toString();

    const user = await User.findById(req.user._id)
    const file = user.files.id(subDocumentId);
    file.contents = fileContents;

    await user.save()
    res.send(`Updated: "${req.params.file}"\n`);
  } catch (err) {
    next(err)
  }
}

exports.deleteFile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const file = user.files.find((file => file.name === req.params.file));
    if (file) {
      user.files.id(file._id).remove();
      await user.save();
      return res.send(`Deleted: "${req.params.file}"\n`);
    }

    return res.send("No file found to delete\n");
  } catch (err) {
    next(err);
  }
}
