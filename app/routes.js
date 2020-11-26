const express = require('express');
const { response } = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    console.log('route home');
    res.send('home');
});

module.exports = router;