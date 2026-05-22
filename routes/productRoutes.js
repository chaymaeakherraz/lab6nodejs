const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/create', productController.showCreateForm);
router.post('/create', productController.createProduct);
router.get('/edit/:id', productController.showEditForm);
router.post('/:id/update', productController.updateProduct);
router.post('/:id/delete', productController.deleteProduct);
router.get('/:id', productController.getProductById);

module.exports = router;