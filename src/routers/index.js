/* eslint-disable func-names */
const players = require('routers/players');
const cors = require('routers/cors');
const upload = require('routers/upload');
const playerGear = require('routers/player-gear');
const honor = require('routers/honor');

const setup = function (app) {
  app.use(cors.router);
  app.use(players.router);
  app.use(upload.router);
  app.use(playerGear.router);
  app.use(honor.router);
};

module.exports = {
  setup,
};
