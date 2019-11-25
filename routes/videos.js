const router = require('express').Router();
const videosCtrl = require('../controllers/videos.js');
const multer = require('multer');
const parseVideo = multer({ dest: 'tmp/' }).single('video');
const cleanTemp = require('../middleware/cleanTemp');

router.post('/', parseVideo, videosCtrl.create, cleanTemp);

module.exports = router;