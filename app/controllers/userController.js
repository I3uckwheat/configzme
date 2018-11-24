const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.register = (req, res, next) => {
  // TODO - validation of input
  const user = new User({ username: req.body.username, active: true });

  User.register(user, req.body.password, (err, user) => {
    if (err) console.error(err);

    const authenticate = User.authenticate();
    authenticate(req.body.user, req.body.password, (err, result) => {
      if (err) console.error(err);

      console.log(result);
    });
  });
}

exports.authenticate = async (req, res, next) => {
  // route parameter username takes precidence
  const username = req.params.username || req.get('username');
  const password = req.get('password');

  const { user } = await User.authenticate()(username, password);

  if (user) return next();
  // TODO - make this a better error
  return res.status(403).send('Access Denied');
}
