const mongoose = require('mongoose');
const User = mongoose.model('User');
const File = mongoose.model('File');

exports.getAllFiles = async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("files").exec();
  res.json(user.files);
}

exports.getFile = async (req, res, next) => {
  const file = await File.findOne({user: req.user.id, name: req.params.file}).exec();
  if (!file) {
    return next();
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
    user.files.push(file.id),

    await Promise.all([
      file.save(),
      user.save()
    ]);

    res.sendStatus(200);
  } else {
    res.status(400).send("err_file_already_exists");
  }
}

exports.upsertFile = async (req, res, next) => {
  if(!req.file) { 
    return res.status(400).send("err_no_file_attached"); 
  }

  const fileContents = req.file.buffer.toString();
  if(fileContents === "") {
    return res.status(400).send("err_empty_file_attached");
  }

  const userPromise = User.findById(req.user.id).populate("files").exec();
  const filePromise = File.findOneAndUpdate(
    { user: req.user.id, name: req.params.file }, 
    { contents: fileContents }, 
    { new: true, upsert: true }
    ).exec();

  const [user, file] = await Promise.all([userPromise, filePromise]);
  const fileWasAdded = await user.addFile(file);

  res.status(200);
  return fileWasAdded ? res.send('file_added') : res.send('file_updated');
}

exports.deleteFile = async (req, res) => {
  const user = await User.findById(req.user.id).populate("files");

  const fileToRemove = user.files.find((file) => file.name === req.params.file);

  const filesToKeep = user.files.filter((file) => file.name !== req.params.file);
  user.files = filesToKeep;

  await fileToRemove.remove();
  await user.save();

  res.sendStatus(200);
}
