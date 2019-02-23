const mongoose = require('mongoose');
const { extractUserCredentials } = require('../helpers');
const User = mongoose.model('User');

// Authenticates with basic auth
exports.authenticate = async (req, res, next) => {
  // TODO - Allow session validation for browsers
  try {
    const authHeader = req.get('Authorization');
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
    console.error(`Error -> URL: ${req.url} \n\n`, err);
    next(err)
  }
}
