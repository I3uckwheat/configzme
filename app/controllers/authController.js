const mongoose = require('mongoose');
const { extractUserCredentials } = require('../helpers');
const User = mongoose.model('User');

// Authenticates with basic auth
exports.authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  const [username, password] = extractUserCredentials.fromBasicAuth(authHeader);

  const { user } = await User.authenticate()(username, password);
  if (user) {
    req.user = user;
    return next();
  }
  // TODO - make this a better error
  return res.status(403).send('Access Denied');
}