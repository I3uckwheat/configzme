const mongoose = require('mongoose');

const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  files: [{ type: Schema.Types.ObjectId, ref: 'File' }],
});

UserSchema.methods.addFile = async function (file) {
  const currentFilesIds = this.files.map((file) => file._id);
  const idExists = currentFilesIds.some((id) => id.equals(file._id));
  if (!idExists) {
    this.files.push(file._id);
    await this.save();
    return true;
  }
  return false;
};


UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
