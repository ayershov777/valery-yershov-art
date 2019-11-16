const mongoose = require('mongoose');

const exhibitionSchema = mongoose.Schema({
  year: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  location: String
});

module.exports = mongoose.model('Exhibition', exhibitionSchema);