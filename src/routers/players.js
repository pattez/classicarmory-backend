const express = require("express");
const router = express.Router();
const { models } = require("../db");
const sequelize = require("sequelize");

router.post("/players", async (req, res) => {
  const { name } = req.body;
  const players = await models.player.findAll({
    where: {
      [sequelize.Op.or]: [
          {name: {[sequelize.Op.iLike]: `%${name}%`}},
          {server: {[sequelize.Op.iLike]: `%${name}%`}},
          {guild: {[sequelize.Op.iLike]: `%${name}%`}},
      ]
    }
  });
  res.send(players);
});

router.get("/players/:id", async (req, res) => {
  const player = await models.player.findByPk(req.params.id);
  const playerGear = await models.playerGear.findOne({where: {playerId: player.id}, attributes: [
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
  ]});

  res.send({player, playerGear});
});

module.exports = { router };
