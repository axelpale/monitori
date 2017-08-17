var path = require('path');

var INDEX_HTML = path.resolve(__dirname, 'index.html');

exports.serveIndex = function (req, res) {
  return res.sendFile(INDEX_HTML);
};
