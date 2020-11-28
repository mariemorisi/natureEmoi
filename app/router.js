const express = require('express');

const mainController = require('./controllers/mainController');
const cartController = require('./controllers/cartController');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/article/:id', mainController.article);
router.get('/panier', cartController.cartPage);
router.get('/panier/add/:id', cartController.addCart);

module.exports = router;