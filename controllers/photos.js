const Photo = require('../models/photo');

async function getAllPhotos(req, res, next) {
  try {
    const photos = await Photo.find().lean();
    res.send({ photos });
  } catch(err) {
    next(err);
  }
}

async function getPhoto(req, res, next) {
  try {
    const photo = await Photo.findById(req.params.id).lean();
    if(!photo) return res.status(401).send('photo id not found');
    res.send({ photo });
  } catch(err) {
    next(err);
  }
}

async function createPhoto(req, res, next) {
  try {
    const photo = await Photo.create(req.body.photo_info);
    res.status(201).send({ _id: photo._id });
  } catch(err) {
    next(err);
  }
}

async function updatePhoto(req, res, next) {
  try {    
    const q = Photo.findByIdAndUpdate(req.params.id, { "$set": req.body.photo_info });
    q.setOptions({ runValidators: true });
    const photo = await q.lean().estimatedDocumentCount();

    if(!photo) return res.status(401).send('photo id not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function deletePhoto(req, res, next) {
  try {
    const photo = await Photo.findByIdAndDelete(req.params.id).lean();
    if(!photo) return res.status(404).send('photo id not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

module.exports = {
  index: getAllPhotos,
  show: getPhoto,
  create: createPhoto,
  update: updatePhoto,
  delete: deletePhoto
};