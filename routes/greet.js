'use strict';
const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>You are in the greet section. Please type a name at the end of the address for a greeting!</h1>`);
});

router.get('/:handle', (req, res) =>{
    const { handle } = req.params;
    res.send(`<h1>${handle} is here!<br><br>Welcome to the page!</h1>`);
})

module.exports = router;