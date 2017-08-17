
var apiRouter = require('./api/router');
var creatorRouter = require('./creator/router');
var monitorRouter = require('./monitor/router');
var homeRouter = require('./home/router');
var router = require('express').Router();

router.use('/api', apiRouter);
router.use('/create', creatorRouter);
router.use('/', monitorRouter);
router.use('/', homeRouter);

module.exports = router;
