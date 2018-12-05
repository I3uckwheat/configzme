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

exports.addFile = async (req, res, next) => {


  const result = await User.updateOne({
    $and: [{ _id: { $eq: req.user._id } }, { "files.name": { $ne: req.params.file } }] 
  },
  {
    $addToSet: {
      files: {
        name: req.params.file,
        contents: "fuck you"
      }
    }
  });

  if (result.nModified === 0) return res.send(`You already have a file named ${req.params.file}`);
  return res.send(`${req.params.file} uploaded`)
}