const router = require('express').Router();
const photosCtrl = require('../controllers/photos');
const multer = require('multer');

router.get('/', photosCtrl.index);
router.get('/:id', photosCtrl.show);
router.post('/', multer({ dest: 'tmp/' }).single('image'), photosCtrl.create);
router.put('/:id', photosCtrl.update);
router.delete('/:id', photosCtrl.delete);

module.exports = router;