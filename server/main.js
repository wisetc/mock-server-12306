const restify = require('restify');
const fs = require('fs');
const path = require('path');
const queryZ = require('./mock/data/queryZ.json');

function respondJson(req, res, next) {
  // res.send('hello ' + req.params.name);
  res.json(queryZ);
  next();
}

const httpsOpts = {
  key: fs.readFileSync(path.join(__dirname, 'ssl/localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl/localhost.cert')),
  requestCert: false,
  rejectUnauthorized: false,
};

const httpsServer = restify.createServer(httpsOpts);
httpsServer.get('/*', respondJson);

const httpsPort = process.env.PORT || 443;

httpsServer.listen(httpsPort, function() {
  console.log('%s listening at %s', httpsServer.name, httpsServer.url);
});
