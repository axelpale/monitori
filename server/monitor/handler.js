var ejs = require('ejs');

var path = require('path');
var TEMPLATE = path.resolve(__dirname, 'template.ejs');

exports.loadMonitor = function (req, res, next) {

  req.monitor = {
    name: req.params.monitorId,
    frames: [

      {
        url: 'http://akselipalen.com',
        x: 0,
        y: 0,
        w: 100,
        h: 100,
      },

      {
        url: 'https://www.wikipedia.org/',
        x: 0,
        y: 0,
        w: 100,
        h: 100,
      },

    ],
  };

  return next();
};

exports.serveClient = function (req, res) {
  ejs.renderFile(TEMPLATE, {
    name: req.monitor.name,
  }, {}, function (err, html) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    return res.send(html);
  });
};
