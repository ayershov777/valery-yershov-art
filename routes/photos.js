const router = require('express').Router();
const photosCtrl = require('../controllers/photos');
const multer = require('multer');
const fs = require('fs');

const formData = multer({ dest: 'tmp/' }).single('image');

router.get('/', photosCtrl.index);
router.get('/:id', photosCtrl.show);
router.post('/', formData, photosCtrl.create, cleanTemp);
router.put('/:id', formData, photosCtrl.update, cleanTemp);
router.delete('/:id', photosCtrl.delete);

// delete the image files created by multer
function cleanTemp(req, res, next) {
  try {
    fs.unlinkSync('tmp/blur.jpg');
    fs.unlinkSync(req.file.path);

    if(req.method === 'POST')
      res.status(201).send({ _id: req.photo._id });

    if(req.method === 'PUT')
      res.status(204).send();
  } catch(err) {
    next(err);
  }
}

module.exports = router;