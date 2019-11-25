const fs = require('fs');

// deletes the temporary files created by multer when parsing form-data images and videos
function cleanTemp(req, res, next) {
  try {
    fs.readdirSync('tmp').forEach(file => fs.unlinkSync('tmp/' + file));
    req.nextCb();
  } catch(err) {
    next(err);
  }
}

module.exports = cleanTemp;