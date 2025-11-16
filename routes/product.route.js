const express = require('express');
const router = express.Router();
const Product = require('../models/product.model.js');
const productController = require('../controller/product.controller.js');   

router.get('/', productController.getProducts);

router.get('/:id', productController.getProduct);

router.post('/',productController.createProduct);

router.put('/:id', productController.updatedProduct);

router.delete('/:id', productController.deletedProduct);    
module.exports = router;