const aws = require('aws-sdk');

aws.config.setPromisesDependency();
aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: 'us-east-1'
});