const Exhibition = require('../models/exhibition');


async function getAllExhibitions(req, res, next) {
  try {
    const exhibitions = await Exhibition.find().lean();
    res.json({ exhibitions });
  } catch(err) {
    next(err);
  }
}

async function getExhibition(req, res, next) {
  try {
    const exhibition = await Exhibition.findById(req.params.id).lean();
    res.json({ exhibition });
  } catch(err) {
    next(err);
  }
}

async function createExhibition(req, res, next) {
  try {
    const exhibition = await Exhibition.create(req.body.exhibition_info);
    res.status(201).json({ _id: exhibition._id });
  } catch(err) {
    next(err);
  }
}

async function updateExhibition(req, res, next) {
  try {
    const exhibition = await Exhibition.findByIdAndUpdate(
      req.params.id,
      req.body.exhibition_info,
      { projection: '_id' })
    .lean();
    if(!exhibition) return res.status(404).send('exhibition id not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function deleteExhibition(req, res, next) {
  try {
    const exhibition = await Exhibition.findByIdAndDelete(
      req.params.id,
      req.body.exhibition_info,
      { projection: '_id' })
    .lean();
    if(!exhibition) return res.status(404).send('exhibition id not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

module.exports = {
  index: getAllExhibitions,
  show: getExhibition,
  create: createExhibition,
  update: updateExhibition,
  delete: deleteExhibition
};