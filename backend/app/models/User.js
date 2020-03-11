const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  files: [{type: Schema.Types.ObjectId, ref: "Files"}]
});


UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);