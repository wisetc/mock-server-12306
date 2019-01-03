const restify = require('restify');
const fs = require('fs');
const path = require('path');

const makeRoutes = require('./routes');

const httpsOpts = {
  key: fs.readFileSync(path.join(__dirname, 'ssl/localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl/localhost.cert')),
  requestCert: false,
  rejectUnauthorized: false,
};

const httpsServer = restify.createServer(httpsOpts);
makeRoutes(httpsServer);

const httpsPort = process.env.PORT || 443;

httpsServer.listen(httpsPort, function() {
  console.log('%s listening at %s', httpsServer.name, httpsServer.url);
});
