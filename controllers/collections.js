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
    if(err.message === 'req.body.collection_info is not defined')
      res.status(400);
    else res.status(500);
    res.send(err.message || 'server error');
  }
}

async function updateCollection(req, res) {
  try {
    assert(req.body.collection_info, 'req.body.collection_info is not defined');
    const q = Collection.findById(req.params.id);
    const updateQuery = {};
    Object.keys(req.body.collection_info).forEach(key => {
      updateQuery[key] = req.body.collection_info[key];
    });
    const results = await q.updateOne({ "$set": updateQuery });
    assert(!!results.n, 'collection id not found');
    res.status(204).send();
  } catch(err) {
    console.log(err);
    if(err.message === 'collection id not found')
      res.status(400);
    else res.status(500);
    res.send(err.message || 'server error');
  }
}

async function deleteCollection(req, res) {
  try {
    const q = Collection.findById(req.params.id);
    const results = await q.deleteOne();
    assert(!!results.n, 'collection id not found');
    res.status(204).send();
  } catch(err) {
    console.log(err);
    if(err.message === 'collection id not found')
      res.status(400);
    else res.state(500);
    res.send(err.message || 'server error');
  }
}

module.exports = {
  index: getAllCollections,
  show: getCollection,
  create: createCollection,
  update: updateCollection,
  delete: deleteCollection
};