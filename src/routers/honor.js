/* eslint-disable no-param-reassign */
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

  const order = orderBy === 'lastweekStanding' ? 'ASC' : 'DESC';

  const races = faction === 1 ? [1, 3, 4, 7] : [2, 5, 6, 8];
  const players = models.player.findAll({
    where: {
      serverId,
      raceId: races,
      [`${orderBy}`]: { [Op.gt]: 0 },
    },
    order: [[orderBy, order]],
    offset: offset || 0,
    limit: 50,
  });
  const result = await players.map(async (player) => {
    const f = RACES[player.dataValues.raceId].faction;

    if (!player.dataValues.guild) {
      player.dataValues.guild = '';
    }

    if (!player.dataValues.guildRank) {
      player.dataValues.guildRank = '';
    }


    return { ...player.dataValues, faction: f === 'Alliance' ? 1 : 2 };
  });
  res.send(result);
});

module.exports = { router };
