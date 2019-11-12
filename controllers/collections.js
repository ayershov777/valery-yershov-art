const Collection = require('../models/collection');

async function getAllCollections(req, res, next) {
  try {
    const collections = await Collection.find().lean();
    res.json({ collections });
  } catch(err) {
    next(err);
  }
}

async function getCollection(req, res, next) {
  try {
    const collection = await Collection.findById(req.params.id).lean();
    if(!collection) return res.status(404).send('collection id not found');
    res.json({ collection });
  } catch(err) {
    next(err);
  }
}

async function createCollection(req, res, next) {
  try {
    let collection = await Collection.create(req.body.collection_info);
    res.status(201).json({ _id: collection._id });
  } catch(err) {
    next(err);
  }
}

async function updateCollection(req, res, next) {
  try {
    const q = Collection.findByIdAndUpdate(req.params.id, { "$set": req.body.collection_info });
    q.setOptions({ runValidators: true });
    const n = await q.lean().estimatedDocumentCount();
    if(!n) return res.status(404).send('collection id not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function deleteCollection(req, res) {
  try {
    const q = Collection.findByIdAndDelete(req.params.id);
    const n = q.lean().estimatedDocumentCount();
    if(!n) return res.status(404).send('collection id not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

module.exports = {
  index: getAllCollections,
  show: getCollection,
  create: createCollection,
  update: updateCollection,
  delete: deleteCollection
};