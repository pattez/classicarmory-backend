const express = require('express');

const router = express.Router();
const { getModelNames } = require('helpers/parse');
const { RACES } = require('globals');
const { models } = require('../db');

router.post('/honor', async (req, res) => {
  const { serverId, offset } = req.body;
  const players = models.player.findAll({
    where: {
      serverId,
    },
    order: [['todayHonor', 'DESC']],
    offset: offset || 0,
    limit: 50,
  });
  const result = await players.map(async (player) => {
    const p = Object.keys(player.dataValues).map(
      (i) => i.includes('Id') && { model: i.split('Id')[0], id: player.dataValues[i] },
    ).filter((j) => j.id);
    const values = await getModelNames(p);
    return { ...player.dataValues, ...values, faction: RACES[player.dataValues.raceId].faction };
  });
  res.send(result);
});

module.exports = { router };
