const mongoose = require('mongoose');
const { extractUserCredentials } = require('../helpers');
const User = mongoose.model('User');

exports.register = (req, res, next) => {
  const authHeader = req.get('Authorization');
  const [username, password] = extractUserCredentials.fromBasicAuth(authHeader);

  // TODO - validation of input
  const user = new User({ username: username, active: true });

  User.register(user, password, (err, user) => {
    if (err) console.error(err);

    const authenticate = User.authenticate();
    authenticate(username, password, (err, result) => {
      if (err) console.error(err);

      console.log(result);
    });
  });
}

// Authenticats with basic auth
exports.authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  const [username, password] = extractUserCredentials.fromBasicAuth(authHeader);

  const { user } = await User.authenticate()(username, password);
  if (user) return next();
  // TODO - make this a better error
  return res.status(403).send('Access Denied');
}
