const Photo = require('../models/photo');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const s3 = new (require('aws-sdk')).S3();

function s3Upload(params) {
  return new Promise((resolve, reject) => {
    s3.upload(
      { ...params, Bucket: process.env.BUCKET_NAME, ACL: 'public-read' },
      (err, data) => (err) ? reject(err) : resolve(data)
    );
  });
}

function s3Delete(params) {
  return new Promise((resolve, reject) => {
    s3.deleteObject(
      { ...params, Bucket: process.env.BUCKET_NAME },
      (err, data) => (err) ? reject(err) : resolve(data)
    );
  });
}

// generate blur and upload photos to s3
async function handlePhotos(file, photo_info) {
  try {
    const blur = await sharp(file.path).blur(20).toFile('tmp/blur.jpg');
    
    const mainKey = path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname);
    const mainData = await s3Upload({ Key: mainKey, Body: fs.readFileSync(file.path) });
    
    const blurKey = mainKey.slice(0, mainKey.length-4) + '_blur.jpg';
    const blurData = await s3Upload({ Key: blurKey, Body: fs.readFileSync('tmp/blur.jpg') });
    
    return {
      ...photo_info,
      mainUrl: mainData.Location,
      blurUrl: blurData.Location,
      mainKey,
      blurKey,
      pxHeight: blur.height,
      pxWidth: blur.width
    };
  } catch(err) {
    throw err;
  }
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
    const photo_info = await handlePhotos(req.file, { alt: req.body.alt, highUrl: req.body.highUrl });
    const photo = await Photo.create(photo_info);
    req.nextCb = () => {
      res.status(201).send({ _id: photo.id });
    }
    next();
  } catch(err) {
    next(err);
  }
}

async function updatePhoto(req, res, next) {
  try {
    let photo_info = {};
    if(req.body.alt)
      photo_info.alt = req.body.alt;

    if(req.body.highUrl)
      photo_info.highUrl = req.body.highUrl;
    
    if(req.file)
      photo_info = await handlePhotos(req.file, photo_info);
      
    const photo = await Photo.findByIdAndUpdate(
      req.params.id,
      photo_info,
      { runValidators: true, projection: 'mainKey blurKey' })
     .lean();
    if(!photo) return res.status(404).send('photo id not found');

    
    if(req.file) {
      await s3Delete({ Key: photo.mainKey }); 
      await s3Delete({ Key: photo.blurKey });
      
      req.nextCb = () => { 
        res.status(204).send();
      }
      next();
    } else {
      res.status(204).send();
    }
  } catch(err) {
    next(err);
  }
}

async function deletePhoto(req, res, next) {
  try {
    const photo = await Photo.findByIdAndDelete(req.params.id, { projection: 'mainKey blurKey' }).lean();
    if(!photo) return res.status(404).send('photo id not found');
    await s3Delete({ Key: photo.mainKey }); 
    await s3Delete({ Key: photo.blurKey }); 
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