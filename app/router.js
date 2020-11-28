const express = require('express');
const mainController = require('./controller/mainController');
const router = express.Router();


router.get('/', mainController.homePage);
router.get('/article/:id', mainController.article);

module.exports = router;