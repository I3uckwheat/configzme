const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getAllFiles = async (req, res, next) => {
  try {
    const filenames = req.user.files.map(file => {
      return file.name;
    });

    const files = JSON.stringify(filenames) + "\n"
    res.send(`------------\nFiles: ${files} \nRun "curl https://configz.me" for configz.me usage\n`);
  } catch (err) {
    next(err);
  }
}

exports.getFile = async (req, res, next) => {
  const file = req.user.files.find(file => file.name === req.params.file)
  if (file) return res.send(file.contents);
  return res.send(`No file called ${req.params.file} found \n`)
}

exports.addFile = async (req, res, next) => {
  try {
    const fileContents = req.file.buffer.toString();
    const result = await User.updateOne({
      $and: [{ _id: { $eq: req.user._id } }, { "files.name": { $ne: req.params.file } }] 
    },
    {
      $addToSet: {
        files: {
          name: req.params.file,
          contents: fileContents
        }
      }
    });

    if (result.nModified === 0) return res.send(`You already have a file named "${req.params.file}"\n`);
    return res.send(`"${req.params.file}" uploaded\n`)
  } catch (err) {
    next(err);
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
