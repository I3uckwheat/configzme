const mongoose = require('mongoose');
const {
  extractUserCredentials
} = require('../helpers');
const User = mongoose.model('User');

exports.register = (req, res, next) => {
  const authHeader = req.get('Authorization');
  const [username, password] = extractUserCredentials.fromBasicAuth(authHeader);

  // TODO - validation of input
  const user = new User({
    username: username,
    active: true
  });

  User.register(user, password, (err, user) => {
    if (err) {
      return res.send(err.message);
    }

    const authenticate = User.authenticate();
    authenticate(username, password, (err, result) => {
      if (err) {
        console.error(err);
        return res.send(err);
      }

      res.send('Registered');
    });
  });
}

exports.addFile = async (req, res) => {
  const fileContents = req.file.buffer.toString();

  try {
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
  } catch (e) {
    console.log(e);
    res.send('err');
  }
}

exports.getAllFiles = async (req, res) => {
  const filenames = req.user.files.map(file => {
    return file.name;
  });

  res.send(filenames);
}

exports.getFile = async (req, res, next) => {
  const file = req.user.files.find(file => file.name === req.params.file)
  console.log(file);
  if (file) return res.send(file.contents);
  return res.send(`no file called ${req.params.file} found`)
}

exports.deleteFile = async (req, res) => {
  const user = await User.findById(req.user._id);
  const file = user.files.find((file => file.name === req.params.file));
  if (file) {
    try {
      user.files.id(file._id).remove();
      await user.save();
      return res.send(`${req.params.file} deleted`);
    } catch (e) {
      console.log(e);
      res.status(500).send('there has been an error');
    }
  }

  return res.send('no file found to delete');
}