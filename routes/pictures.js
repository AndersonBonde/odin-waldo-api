const { Router } = require('express');
const picturesController = require('../controllers/picturesController');

const router = new Router();

router.get('/', picturesController.getAllPictures);
router.get('/:id', picturesController.getPictureById);

module.exports = router;
