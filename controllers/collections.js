const Collection = require('../models/collection');
const assert = require('assert');

async function getAllCollections(req, res) {
  try {
    const collections = await Collection.find();
    res.json({ collections });
  } catch(err) {
    console.log(err);
    res.status(500).send(err.message || 'server error');
  }
}

async function getCollection(req, res) {
  try {
    const collection = await Collection.findById(req.params.id);
    res.json({ collection });
  } catch(err) {
    console.log(err);
    res.status(500).send(err.message || 'server error');
  }
}

async function createCollection(req, res) {
  try {
    assert(req.body.collection_info, 'req.body.collection_info is not defined');
    let collection = await Collection.create(req.body.collection_info);
    res.status(201).json({ _id: collection._id });
  } catch(err) {
    console.log(err);
    res.status(500).send(err.message || 'server error');
  }
}

async function updateCollection(req, res) {
  try {
    assert(req.body.collection_info, 'req.body.collection_info is not defined');
    const collection = await Collection.findById(req.params.id);
    assert(collection, 'collection id not found');
    Object.keys(req.body.collection_info).forEach(key => {
      collection[key] = req.body.collection_info[key];
    });
    await collection.save();
    res.status(204).send();
  } catch(err) {
    console.log(err);
    res.status(500).send(err.message || 'server error');
  }
}

async function deleteCollection(req, res) {
  try {
    // const collection = await Collection.findById(req.params.id);
    // assert(collection, 'collection id not found');
    // await collection.remove();

    const q = Collection.findById(req.params.id);
    const collection = await q.deleteOne();
    assert(collection, 'collection id not found');
    res.status(204).send();
  } catch(err) {
    console.log(err);
    res.status(500).send(err.message || 'server error');
  }
}

module.exports = {
  index: getAllCollections,
  show: getCollection,
  create: createCollection,
  update: updateCollection,
  delete: deleteCollection
};