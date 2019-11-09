const router = require('express').Router();
const collectionsCtrl = require('../controllers/collections');

router.get('/', collectionsCtrl.index);
router.get('/:id', collectionsCtrl.show);
router.post('/', collectionsCtrl.create);
router.put('/:id', collectionsCtrl.update);
router.delete('/:id', collectionsCtrl.delete);

module.exports = router;