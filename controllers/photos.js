const Photo = require('../models/photo');
const fs = require('fs');
const path = require('path');
const aws = require('aws-sdk');
const sharp = require('sharp');

// config

aws.config.setPromisesDependency();
aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: 'us-east-1'
});

const s3 = new aws.S3();
const BUCKET_NAME = 'valery-yershov-art';

function s3Upload (params) {
  return new Promise((resolve, reject) => {
    s3.upload(
      { ...params, Bucket: BUCKET_NAME, ACL: 'public-read' },
      (err, data) => (err) ? reject(err) : resolve(data)
    );
  });
}

// controller functions

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
    const file = req.file;
    const key = path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname);

    // upload main img to s3
    const mainData = await s3Upload({ Key: key, Body: fs.readFileSync(file.path) });

    // generate blurred image with sharp
    const blur = await sharp(file.path).blur(20).toFile('tmp/blur.jpg');
    
    // upload blur img to s3
    const blurData = await s3Upload({
      Key: key.slice(0, key.length-4) + '_blur.jpg',
      Body: fs.readFileSync('tmp/blur.jpg')}
    );

    // save data to MongoDB
    const photo = await Photo.create({
      main_url: mainData.Location,
      blur_url: blurData.Location,
      alt: req.body.alt,
      pxHeight: blur.height,
      pxWidth: blur.width
    });
    
    res.status(201).send({
      _id: photo._id,
      main_url: photo.main_url,
      blur_url: photo.blur_url
    });
  } catch(err) {
    next(err);
  }

  try {
    fs.unlinkSync('tmp/blur.jpg');
    fs.unlinkSync(req.file.path);
  } catch(err) {
    next(err);
  }
}

async function updatePhoto(req, res, next) {
  try {    
    const photo = await Photo.findByIdAndUpdate(
      req.params.id,
      req.body.photo_info,
      { runValidators: true, projection: '_id' })
    .lean();
    if(!photo) return res.status(404).send('photo id not found');
    res.status(204).send();
  } catch(err) {
    next(err);
  }
}

async function deletePhoto(req, res, next) {
  try {
    const photo = await Photo.findByIdAndDelete(req.params.id, { projection: '_id' }).lean();
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