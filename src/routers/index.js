/* eslint-disable func-names */
const players = require('routers/players');
const cors = require('routers/cors');
const upload = require('routers/upload');

const setup = function (app) {
  app.use(cors.router);
  app.use(players.router);
  app.use(upload.router);
};

module.exports = {
  setup,
};
