const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.initialize = async (req, res) => {
  res.json(req.user);
}
