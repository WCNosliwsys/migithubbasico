var express = require('express');
var router = express.Router();
var product_controller = require('../controllers/product');
router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create);
router.get('/list', product_controller.product_list);
router.get('/buscar/:name', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);
module.exports = router;