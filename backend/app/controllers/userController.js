const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.addFile = async (req, res, next) => {
  try {
    try {
    const fileContents = req.file.buffer.toString();
    } catch (error) {
      return res.send("A file must be sent with a POST request\n");
    }
    
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

    if (result.nModified === 0) return res.send(`You already have a file named ${req.params.file}`);
    return res.send(`${req.params.file} uploaded`)
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
    res.send('updated');
  } catch (err) {
    next(err)
  }
}

exports.getAllFiles = async (req, res, next) => {
  try {
    const filenames = req.user.files.map(file => {
      return file.name;
    });

    res.send(filenames);
  } catch (err) {
    next(err);
  }
}

exports.getFile = async (req, res, next) => {
  const file = req.user.files.find(file => file.name === req.params.file)
  if (file) return res.send(file.contents);
  return res.send(`no file called ${req.params.file} found`)
}

exports.deleteFile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const file = user.files.find((file => file.name === req.params.file));
    if (file) {
      user.files.id(file._id).remove();
      await user.save();
      return res.send(`${req.params.file} deleted`);
    }

    return res.send('no file found to delete');
  } catch (err) {
    next(err);
  }
}
