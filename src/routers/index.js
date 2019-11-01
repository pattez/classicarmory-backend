/* eslint-disable func-names */
const players = require('routers/players');
const cors = require('routers/cors');
const upload = require('routers/upload');
const playerGear = require('routers/player-gear');

const setup = function (app) {
  app.use(cors.router);
  app.use(players.router);
  app.use(upload.router);
  app.use(playerGear.router);
};

module.exports = {
  setup,
};
