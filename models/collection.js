const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
  title: {
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
  },
  main_url: {
    type: String,
    required: true
  },
  placeholder_url: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  sizeLabel: {
    type: String,
    default: "unavailable"
  },
  mediumLabel: {
    type: String,
    default: "unavailable"
  },
  yearLabel: {
    type: String,
    default: "unavailable"
  },
  description: {
    type: String,
    default: "description not yet available"
  }
});

const collectionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: "description not yet available"
  },
  works: [workSchema],
  coverIndex: {
    type: Number,
    default: 0
  }
});

collectionSchema.pre('updateOne', next => {
  console.log('collection pre updateOne');
  next();
});

module.exports = mongoose.model('Collection', collectionSchema);