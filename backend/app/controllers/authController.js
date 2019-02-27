const mongoose = require('mongoose');
const { extractUserCredentials } = require('../helpers');
const User = mongoose.model('User');

// Authenticates with basic auth
// TODO - Allow session validation for browsers
exports.authenticate = async (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');

    // If there is no auth header, go to 404
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

    return res.status(403).send("Access Denied\n");
  } catch (err) {
    next(err)
  }
}

exports.register = async (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');

    // if there is no authHeader, go to 404
    if (!authHeader) return next('route');
    const [username, password] = extractUserCredentials.fromBasicAuth(authHeader);

    // TODO - validation of input
    const user = new User({
      username: username,
      active: true
    });

    try {
       await User.register(user, password);
    } catch (error) {
      if (error.name === "UserExistsError") {
        return res.send(error.message + "\n"); 
      }
      throw error
    }

    const authenticate = User.authenticate();
    await authenticate(username, password);

    res.send(`Registered as "${username}"\n`);
  } catch (err) {
    next(err)
  }
}
