'use strict';
const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>Hello from express!!!</h1><a href="./greet">Click here to go to the greet page!</a>`);
});

module.exports = router;