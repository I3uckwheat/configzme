const mongoose = require('mongoose');
const { extractUserCredentials } = require('../helpers');

const User = mongoose.model('User');
const passport = require('passport');

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
      return res.status(409).send(err.message);
    }

    return next();
  });

  // try {
  //   const authHeader = req.get('Authorization');

  //   // if there is no authHeader, go to 404
  //   if (!authHeader) return next('route');
  //   const [username, password] = extractUserCredentials.fromBasicAuth(authHeader);

  //   const user = new User({
  //     username: username,
  //     active: true
  //   });

  //   try {
  //      await User.register(user, password);
  //   } catch (error) {
  //     if (error.name === "UserExistsError") {
  //       return res.send(error.message + "\n");
  //     }
  //     throw error
  //   }

  //   const authenticate = User.authenticate();
  //   await authenticate(username, password);

  //   res.send(`Registered as "${username}"\n`);
  // } catch (err) {
  //   next(err)
  // }
};

async function authenticateByHeaders(req, res, next) {
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
        files: user.files,
      };
      return next();
    }

    return res.status(403).send('Access Denied\n');
  } catch (err) {
    next(err);
  }
}

exports.ensureAuthentication = async (req, res, next) => {
  if (req.get('Authorization')) {
    // authenticateByHeaders(req, res, next);
  } else {
    if (req.isAuthenticated()) return next();
    return res.sendStatus(403);
  }
};
