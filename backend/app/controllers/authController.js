const mongoose = require('mongoose');

const User = mongoose.model('User');
const passport = require('passport');
const { extractUserCredentials } = require('../helpers');

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.sendStatus(403);
    req.login(user, (err) => {
      if (err) return next(err);
    });

    return res.sendStatus(201);
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  req.logout();
  res.sendStatus(204);
};

exports.register = async (req, res, next) => {
  User.register({ username: req.body.username }, req.body.password, (err) => {
    if (err) {
      return res.status(409).send(err.message + '\n');
    }

    return next();
  });
};

exports.authenticateByHeaders = async (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');

    // If there is no auth header, go to 400
    if (!authHeader) return next('route');
    const [username, password] = extractUserCredentials.fromBasicAuth(authHeader);

    const { user } = await User.authenticate()(username, password);
    if (user) {
      req.user = {
        id: user._id,
        username: user.username,
        files: user.files,
      };
      return next();
    }

    return res.status(403).send('Access Denied\n');
  } catch (err) {
    next(err);
  }
}

exports.handleBasicAuth = (req, res, next) => {
  const authHeader = req.get('Authorization');

  // if there is no authHeader, go to 400
  if (!authHeader) {
    return next('route');
  } 

  const [username, password] = extractUserCredentials.fromBasicAuth(authHeader);

  req.body.username = username;
  req.body.password = password;
  next();
}

exports.ensureAuthentication = async (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.sendStatus(403);
};
