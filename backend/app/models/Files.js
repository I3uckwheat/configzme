
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Files', FileSchema);