const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); /* Rendering the index file, using ejs. */
})

router.get('/about', (req, res) => {
    res.render('index'); /* Rendering the index file, using ejs. */
})

module.exports = router;
