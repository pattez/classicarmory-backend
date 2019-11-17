const express = require('express');
const { RACES } = require('globals');

const router = express.Router();
const Sequelize = require('sequelize');
const { models } = require('../db');

const { Op } = Sequelize;

router.post('/honor', async (req, res) => {
  const {
    serverId, offset, faction, orderBy,
  } = req.body;
  const races = faction === 1 ? [1, 3, 4, 7] : [2, 5, 6, 8];
  const players = models.player.findAll({
    where: {
      serverId,
      raceId: races,
      [`${orderBy}`]: { [Op.not]: null },
    },
    order: [[orderBy, 'DESC']],
    offset: offset || 0,
    limit: 50,
  });
  const result = await players.map(async (player) => {
    const f = RACES[player.dataValues.raceId].faction;
    return { ...player.dataValues, faction: f === 'Alliance' ? 1 : 2 };
  });
  res.send(result);
});

module.exports = { router };
