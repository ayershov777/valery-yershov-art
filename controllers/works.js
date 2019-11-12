const Collection = require('../models/collection');

async function getAllWorks(req, res, next) {
  try {
    if(req.query.collection_id) {
      const q = Collection.findById(req.query.collection_id, 'works');
      q.projection({ "works": 1 });
      q.populate('works.photo');
      const collection = await q.lean();
      if(!collection) return res.status(404).send('collection id not found');
      var works = collection.works;
    } else {
      const q = Collection.find({}, 'works');
      q.projection({ "works": 1 });
      q.populate('works.photo');
      const collections = await q.lean();
      var works = collections.reduce((works, collection) => [...works, ...collection.works], []);
    }
    res.json({ works });
  } catch(err) {
    next(err);
  }
}

async function getWork(req, res, next) {
  try {
    const q = Collection.findOne({ "works._id": req.params.id });
    q.projection({ "_id": 0, "works.$": 1 });
    q.populate('works.photo');
    const collection = await q.lean();
    if(!collection) return res.status(404).send("work id not found");
    const work = collection.works[0];
    res.json({ work });
  } catch(err) {
    next(err);
  }
}

async function createWork(req, res, next) {
  try {
    const q = Collection.findOneAndUpdate({ _id: req.body.collection_id }, { "$push": { "works": req.body.work_info }});
    q.setOptions({ new: true, runValidators: true });
    q.projection({ "_id": 0, "works._id": 1, "works": { "$slice": -1,}});
    const collection = await q.lean();
    if(!collection) return res.status(404).send('collection id not found');
    const work = collection.works[0];
    res.json({ work });
  } catch(err) {
    next(err);
  }
}

async function updateWork(req, res, next) {
  try {
    const updateQuery = {};
    Object.keys(req.body.work_info).forEach(key => updateQuery[`works.$.${key}`] = req.body.work_info[key]);
    const q = Collection.findOneAndUpdate({ 'works._id': req.params.id }, { '$set': updateQuery });
    q.setOptions({ runValidators: true });
    const n = await q.lean().estimatedDocumentCount();
    if(!n) return res.status(404).send('work id not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function deleteWork(req, res, next) {
  try {
    const q = Collection.findOneAndUpdate({ 'works._id': req.params.id }, { "$pull": { "works": { "_id": req.params.id }}});
    const n = await q.lean().estimatedDocumentCount();
    if(!n) return res.status(404).send('work id not found')
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

module.exports = {
  index: getAllWorks,
  show: getWork,
  create: createWork,
  update: updateWork,
  delete: deleteWork
};