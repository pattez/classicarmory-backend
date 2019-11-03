const express = require('express');

const router = express.Router();
const sequelize = require('sequelize');
const { getModelNames } = require('helpers/parse');
const { models } = require('../db');

router.post('/players', async (req, res) => {
  const { name, offset } = req.body;
  console.log(offset);
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
    offset,
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
  const playerGear = await models.playerCurrentGear.findOne({
    where: { playerId: player.id },
    attributes: [
      'slot_1',
      'slot_1',
      'slot_2',
      'slot_3',
      'slot_4',
      'slot_5',
      'slot_6',
      'slot_7',
      'slot_8',
      'slot_9',
      'slot_10',
      'slot_11',
      'slot_12',
      'slot_13',
      'slot_14',
      'slot_15',
      'slot_16',
      'slot_17',
      'slot_18',
      'slot_19',
    ],
  });
  const p = Object.keys(player.dataValues).map(
    (i) => i.includes('Id') && { model: i.split('Id')[0], id: player.dataValues[i] },
  ).filter((j) => j.id);
  const values = await getModelNames(p);
  res.send({ player: { ...player.dataValues, ...values }, playerGear });
});

module.exports = { router };
