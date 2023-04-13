const express = require("express");
const productRouter = express.Router();

const { getAllProducts , postProducts } = require('../controllers/Products.js');

productRouter.get('/', getAllProducts);
productRouter.post('/',postProducts);

module.exports = productRouter;