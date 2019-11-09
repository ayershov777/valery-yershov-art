const Collection = require('../models/collection');
const assert = require('assert');

async function getAllWorks(req, res) {
  try {
    if(req.query.collection_id) {
      const collection = await Collection.findById(req.query.collection_id, 'works');
      assert(collection, 'collection id not found');
      var works = collection.works;
    } else {
      const collections = await Collection.find({}, 'works');
      var works = collections.reduce((works, collection) => [...works, ...collection.works], []);
    }
    res.json({ works });
  } catch(err) {
    console.log(err);
    res.status(500).send(err.message || 'server error');
  }
}

async function getWork(req, res) {
  try {
    const collection = await Collection.findOne({ 'works._id': req.params.id });
    assert(collection, 'work id not found');
    res.json({ work: collection.works.id(req.params.id) });
  } catch(err) {
    console.log(err);
    res.status(500).send(err.message || 'server error');
  }
}

async function createWork(req, res) {
  try {
    assert(req.body.collection_id, 'req.body.collection_id is not defined');
    const collection = await Collection.findById(req.body.collection_id);
    assert(collection, 'collection id not found');
    collection.works.push(req.body.work_info);
    await collection.save();
    res.status(201).json({ work: collection.works[collection.works.length-1] });
  } catch(err) {
    console.log(err);
    res.status(500).send(err.message || 'server error');
  }
}

async function updateWork(req, res) {
  try {
    const updateQuery = {};
    Object.keys(req.body.work_info).forEach(key => {
      updateQuery[`works.$.${key}`] = req.body.work_info[key];
    });

    const q = Collection.findOne();
    q.where({ 'works._id': req.params.id });
    q.updateOne({ '$set': updateQuery });
    const collection = await q.exec();
    assert(collection, 'work id not found');
    res.status(204).send();
  } catch(err) {
    console.log(err);
    res.status(500).send(err.message || 'server error');
  }
}

async function deleteWork(req, res) {
  try {
    const q = Collection.findOne();
    q.where({ 'works._id': req.params.id });
    q.update({ '$pull': { "works": { "_id": req.params.id }}});
    const collection = await q.exec();
    assert(collection, 'work id not found');
    res.status(204).send();
  } catch(err) {
    console.log(err);
    if(err.message === 'work id not found')
      res.status(300);
    else res.status(500);
    res.send(err.message || 'server error');
  }
}

module.exports = {
  index: getAllWorks,
  show: getWork,
  create: createWork,
  update: updateWork,
  delete: deleteWork
};