const router = require('express').Router()

// Endpoint to login
router.get('/', function(req, res) {
    var path = require("path");
    res.sendFile(path.resolve('src/views/stream.html'));
});

router.get('/4', function(req, res) {
    var path = require("path");
    res.sendFile(path.resolve('src/views/stream4.html'));
});

module.exports = router