const path = require('path');

function respondJson(jsonName) {
  const json = require(path.join(__dirname, './mock/data/' + jsonName + '.json'));
  function respond(req, res, next) {
    res.json(json);
    next();
  };

  return respond;
}

function makeRoutes(server) {
  server.get('/otn/leftTicket/queryZ', respondJson('queryZ'));
  server.get('/otn/leftTicket/queryTicketPrice', respondJson('queryTicketPrice'));
}

module.exports = makeRoutes;
