let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');

router.get('/:id', productController.renderDetail);

module.exports = router;