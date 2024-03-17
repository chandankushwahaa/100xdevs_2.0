const express = require('express');
const router = express.Router();
const {getProduct, createProduct, updatedProduct, deleteProduct} = require('../controllers/product.controller');

router.get('/', getProduct);

router.post('/', createProduct);

router.put('/:id', updatedProduct);

router.delete('/:id', deleteProduct);

module.exports = router;