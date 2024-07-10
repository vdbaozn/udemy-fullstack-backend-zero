const express = require('express') //import express
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/abc', (req, res) => {
    // res.send('Check ABC')
    res.render('sample.ejs')
})

module.exports = router;