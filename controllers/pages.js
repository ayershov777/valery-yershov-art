const Page = require('../models/page');

async function getAllPages(req, res, next) {
  try {
    const pages = await Page.find().populate('photos.photo').lean();
    res.json({ pages });
  } catch(err) {
    next(err);
  }
}

async function getPage(req, res, next) {
  try {
    const page = await Page.findOne({ title: req.params.title }).populate('photos.photo').lean();
    if(!page) res.status(404).send('page title not found');
    res.json({ page });
  } catch(err) {
    next(err);
  }
}

async function createPage(req, res, next) {
  try {
    const page = await Page.create(req.body.page_info);
    res.status(201).json({ _id: page._id, title: page.title });
  } catch(err) {
    next(err);
  }
}

async function deletePage(req, res, next) {
  try {
    const page = await Page.findOneAndDelete(
      { title: req.params.title },
      { projection: '_id' })
    .lean();
    if(!page) res.status(404).send('page title not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function addPagePhoto(req, res, next) {
  try {
    const page = await Page.findOneAndUpdate(
      { title: req.params.title },
      { '$push': { photos: req.body.page_photo_info }},
      { runValidators: true, projection: '_id' })
    .lean();
    if(!page) res.status(404).send('page title not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function updatePagePhoto(req, res, next) {
  try {
    const updateQuery = {};
    Object.keys(req.body.page_photo_info).forEach(key => updateQuery[`photos.$.${key}`] = req.body.page_photo_info[key]);
    const page = await Page.findOneAndUpdate(
      { title: req.params.page_title, 'photos.title': req.params.data_title },
      updateQuery,
      { runValidators: true, projection: '_id' })
    .lean();
    if(!page) res.status(404).send('page title and/or page_photo title not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function deletePagePhoto(req, res, next) {
  try {
    const page = await Page.findOneAndUpdate(
      { title: req.params.page_title, 'photos.title': req.params.data_title },
      { '$pull': { photos: { title: req.params.data_title }}},
      { projection: '_id' })
    .lean();
    if(!page) res.status(404).send('page title and/or page_photo title not found')
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function addPageText(req, res, next) {
  try {
    const page = await Page.findOneAndUpdate(
      { title: req.params.title },
      { '$push': { texts: req.body.page_text_info }},
      { runValidators: true, projection: '_id' })
    .lean();
    if(!page) res.status(404).send('page title not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function updatePageText(req, res, next) {
  try {
    const updateQuery = {};
    Object.keys(req.body.page_text_info).forEach(key => updateQuery[`texts.$.${key}`] = req.body.page_text_info[key]);
    const page = await Page.findOneAndUpdate(
      { title: req.params.page_title, 'texts.title': req.params.data_title },
      updateQuery,
      { runValidators: true, projection: '_id' })
    .lean();
    if(!page) res.status(404).send('page title and/or page_text title not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function deletePageText(req, res, next) {
  try {
    const page = await Page.findOneAndUpdate(
      { title: req.params.page_title, 'texts.title': req.params.data_title },
      { '$pull': { texts: { title: req.params.data_title }}},
      { projection: '_id' })
    .lean();
    if(!page) res.status(404).send('page title and/or page_text title not found')
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

module.exports = {
  index: getAllPages,
  show: getPage,
  create: createPage,
  delete: deletePage,

  addPagePhoto,
  updatePagePhoto,
  deletePagePhoto,

  addPageText,
  updatePageText,
  deletePageText
};