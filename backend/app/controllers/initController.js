const mongoose = require('mongoose');

exports.initialize = async (req, res) => {
  if (!req.user) {
    return res.json({});
  }
  res.json(req.user);
};
