const router = require('express').Router();
const photosCtrl = require('../controllers/photos');
const multer = require('multer');
const cleanTemp = require('../middleware/cleanTemp');

const parseImage = multer({ dest: 'tmp/' }).single('image');

router.get('/', photosCtrl.index);
router.get('/:id', photosCtrl.show);
router.post('/', parseImage, photosCtrl.create, cleanTemp);
router.put('/:id', parseImage, photosCtrl.update, cleanTemp);
router.delete('/:id', photosCtrl.delete);

module.exports = router;