const router = require('express').Router();
const exhibitionsCtrl = require('../controllers/exhibitions');

router.get('/', exhibitionsCtrl.index);
router.get('/:id', exhibitionsCtrl.show);
router.post('/', exhibitionsCtrl.create);
router.put('/:id', exhibitionsCtrl.update);
router.delete('/:id', exhibitionsCtrl.delete);

module.exports = router;