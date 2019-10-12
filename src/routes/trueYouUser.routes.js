const router = require('express').Router()

// Endpoint to login
router.get('/', function(req, res) {
    var path = require("path");
    res.sendFile(path.resolve('src/views/login.html'));
});

module.exports = router