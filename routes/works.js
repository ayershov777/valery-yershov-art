const router = require('express').Router();
const worksCtrl = require('../controllers/works');

router.get('/', worksCtrl.index);
router.get('/:id', worksCtrl.show);
router.post('/', worksCtrl.create);
router.put('/:id', worksCtrl.update);
router.delete('/:id', worksCtrl.delete);

module.exports = router;