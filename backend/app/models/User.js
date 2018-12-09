const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const FileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true
  },
  extension: String
});

const UserSchema = new Schema({
  files: {
    type: [FileSchema],
  }
});


UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);