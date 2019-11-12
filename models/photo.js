const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  main_url: {
    type: String,
    required: true
  },
  blur_url: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  pxWidth: {
    type: Number,
    required: true
  },
  pxHeight: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Photo', photoSchema);