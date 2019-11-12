const router = require('express').Router();
const photosCtrl = require('../controllers/photos');

router.get('/', photosCtrl.index);
router.get('/:id', photosCtrl.show);
router.post('/', photosCtrl.create);
router.put('/:id', photosCtrl.update);
router.delete('/:id', photosCtrl.delete);

module.exports = router;