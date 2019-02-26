const mongoose = require('mongoose');
const { extractUserCredentials } = require('../helpers');
const User = mongoose.model('User');

// Authenticates with basic auth
exports.authenticate = async (req, res, next) => {
  // TODO - Allow session validation for browsers
  try {
    const authHeader = req.get('Authorization');

    if (!authHeader) return next('route');
    const [username, password] = extractUserCredentials.fromBasicAuth(authHeader);

    const { user } = await User.authenticate()(username, password);
    if (user) {
      req.user = {
        _id: user._id,
        username: user.username,
        files: user.files
      };
      return next();
    }
    // TODO - make this a better error
    return res.status(403).send('Access Denied');
  } catch (err) {
    next(err)
  }
}

exports.register = (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');

    if (!authHeader) return next('route');
    const [username, password] = extractUserCredentials.fromBasicAuth(authHeader);

    // TODO - validation of input
    const user = new User({
      username: username,
      active: true
    });

    User.register(user, password, (err, user) => {
      if (err) {
        throw err;
      }

      const authenticate = User.authenticate();
      authenticate(username, password, (err, result) => {
        if (err) {
          throw err;
        }

        res.send('Registered');
      });
    });
  } catch (err) {
    next(err)
  }
}
