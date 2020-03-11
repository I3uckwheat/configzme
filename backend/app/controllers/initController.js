const mongoose = require('mongoose');

exports.initialize = async (req, res) => {
  res.json(req.user);
}
