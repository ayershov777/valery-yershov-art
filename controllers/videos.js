const path = require('path');
const fs = require('fs');
const s3 = new (require('aws-sdk')).S3();

function s3Upload(params) {
  return new Promise((resolve, reject) => {
    s3.upload(
      { ...params, Bucket: process.env.BUCKET_NAME, ACL: 'public-read' },
      (err, data) => (err) ? reject(err) : resolve(data)
    );
  });
}

async function createVideo(req, res, next) {
  const file = req.file;
  const key = path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname);
  const data = await s3Upload({ Key: key, Body: fs.readFileSync(file.path) });

  console.log(data);

  req.nextCb = () => {
    res.send('ok');
  };
  next();
}

module.exports = {
  create: createVideo
};