const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  photo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photo',
    required: true
  },
  videoUrl: String,
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
  },
  public: {
    type: Boolean,
    default: false
  }
});

collectionSchema.pre('findOneAndUpdate', next => {
  console.log('collection pre findOneAndUpdate');
  next();
});

module.exports = mongoose.model('Collection', collectionSchema);