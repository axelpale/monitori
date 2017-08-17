
var handler = require('./handler');
var router = require('express').Router();

router.get('/', handler.serveIndex);

module.exports = router;
