const Collection = require('../models/collection');

async function getAllWorks(req, res, next) {
  try {
    if(req.query.collection_id) {
      const collection = await Collection.findById(req.query.collection_id, 'works', { projection: { _id: 0, works: 1 }})
       .populate('works.photo')
       .lean();
      if(!collection) return res.status(404).send('collection id not found');
      var works = collection.works;
    } else {
      const collections = await Collection.find({}, 'works').populate('works.photo').lean();
      var works = collections.reduce((works, collection) => [...works, ...collection.works], []);
    }
    res.json({ works });
  } catch(err) {
    next(err);
  }
}

async function getWork(req, res, next) {
  try {
    const collection = await Collection.findOne({ 'works._id': req.params.id }, { _id: 0, 'works.$': 1 })
     .populate('works.photo')
     .lean();
    if(!collection) return res.status(404).send('work id not found');
    const work = collection.works[0];
    res.json({ work });
  } catch(err) {
    next(err);
  }
}

async function createWork(req, res, next) {
  try {
    const collection = await Collection.findOneAndUpdate(
      { _id: req.body.collection_id }, 
      { '$push': { works: req.body.work_info }},
      { new: true, runValidators: true, projection: { _id: 0, 'works._id': 1, works: { '$slice': -1 }}})
     .lean();
    if(!collection) return res.status(404).send('collection id not found');
    const work = collection.works[0];
    res.json({ _id: work._id });
  } catch(err) {
    next(err);
  }
}

async function updateWork(req, res, next) {
  try {
    const updateQuery = {};
    Object.keys(req.body.work_info).forEach(key => updateQuery[`works.$.${key}`] = req.body.work_info[key]);
    const collection = await Collection.findOneAndUpdate(
      { 'works._id': req.params.id }, 
      updateQuery, 
      { runValidators: true, projection: '_id' })
     .lean();
    if(!collection) return res.status(404).send('work id not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function deleteWork(req, res, next) {
  try {
    const collection = await Collection.findOneAndUpdate(
      { 'works._id': req.params.id },
      { '$pull': { works: { _id: req.params.id }}},
      { projection: '_id' })
     .lean();
    if(!collection) return res.status(404).send('work id not found');
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