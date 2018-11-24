const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  // files is an array of 'files' defined by the 'file' schema
  files: [{type: mongoose.Schema.Types.ObjectId, ref: 'File'}]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);