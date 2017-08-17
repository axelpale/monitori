
var handler = require('./handler');
var router = require('express').Router();

router.get('/:monitorId', handler.loadMonitor, handler.serveClient);

module.exports = router;
