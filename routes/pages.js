const router = require('express').Router();
const pagesCtrl = require('../controllers/pages');

router.get('/', pagesCtrl.index);
router.get('/:title', pagesCtrl.show);
router.post('/', pagesCtrl.create);
router.delete('/:title', pagesCtrl.delete);

router.post('/:title/photos', pagesCtrl.addPagePhoto);
router.put('/:page_title/photos/:data_title', pagesCtrl.updatePagePhoto)
router.delete('/:page_title/photos/:data_title', pagesCtrl.deletePagePhoto);

router.post('/:title/texts', pagesCtrl.addPageText);
router.put('/:page_title/texts/:data_title', pagesCtrl.updatePageText)
router.delete('/:page_title/texts/:data_title', pagesCtrl.deletePageText);

module.exports = router;