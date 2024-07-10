const express = require('express') //import express
const { getHomepage, getABC, getHoiDanIT } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route','')

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hoidanit', getHoiDanIT)

module.exports = router;