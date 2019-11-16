const mongoose = require('mongoose');

const pagePhoto = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  photo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photo'
  }
});

const pageText = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const pageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  photos: [pagePhoto],
  texts: [pageText]
});

module.exports = mongoose.model('Page', pageSchema);