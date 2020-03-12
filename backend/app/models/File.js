
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: "User"},
  name: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('File', FileSchema);