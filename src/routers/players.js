const express = require('express');

const router = express.Router();
const sequelize = require('sequelize');
const { getModelNames } = require('helpers/parse');
const { SLOTS } = require('globals');
const { getSlot } = require('helpers/functions');
const { models } = require('../db');

router.post('/players', async (req, res) => {
  const { name, offset } = req.body;
  const servers = await models.server.findAll();
  const server = servers.find((i) => i.name.toLowerCase() === name.toLowerCase());
  const where = [
    { name: { [sequelize.Op.iLike]: `%${name}%` } },
    { guild: { [sequelize.Op.iLike]: `%${name}%` } },
  ];
  if (server) {
    where.push({ serverId: server.id });
  }
  const players = models.player.findAll({
    where: {
      [sequelize.Op.or]: where,
    },
    limit: 50,
    offset: offset || 0,
  });
  const result = await players.map(async (player) => {
    const p = Object.keys(player.dataValues).map(
      (i) => i.includes('Id') && { model: i.split('Id')[0], id: player.dataValues[i] },
    ).filter((j) => j.id);
    const values = await getModelNames(p);
    return { ...player.dataValues, ...values };
  });
  res.send(result);
});

router.get('/players/:id', async (req, res) => {
  const player = await models.player.findByPk(req.params.id);
  const playerCurrentGear = await models.playerCurrentGear.findOne({
    where: { playerId: player.id },
    attributes: SLOTS,
  });

  const playerGear = await models.playerGear.findAll({
    where: {
      playerId: player.id,
    },
  });


  const p = Object.keys(player.dataValues).map(
    (i) => i.includes('Id') && { model: i.split('Id')[0], id: player.dataValues[i] },
  ).filter((j) => j.id);
  const values = await getModelNames(p);

  const gear = {};

  for (const pcg of Object.keys(playerCurrentGear.dataValues)) {
    const slotId = getSlot(pcg);
    gear[pcg] = gear[pcg] || [];
    const pg = playerGear.filter((i) => i.slotId.toString() === slotId).map((j) => {
      const current = playerCurrentGear.dataValues[pcg] === j.dataValues.itemId;
      return { ...j.dataValues, current };
    });
    gear[pcg] = [...gear[pcg], ...pg];
  }

  for (const g of Object.keys(gear)) {
    gear[g] = gear[g].sort((a, b) => (b.current ? 1 : -1));
  }

  res.send({ player: { ...player.dataValues, ...values }, gear });
});

module.exports = { router };
