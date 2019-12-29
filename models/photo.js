const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  mainUrl: {
    type: String,
    required: true
  },
  blurUrl: {
    type: String,
    required: true
  },
  highUrl: String,
  mainKey: {
    type: String,
    required: true
  },
  blurKey: {
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