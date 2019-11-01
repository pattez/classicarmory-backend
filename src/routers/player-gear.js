const express = require('express');

const router = express.Router();
const { models } = require('../db');

router.get('/players/:id/gear', async (req, res) => {
  const { id } = req.params;
  const playerGear = await models.playerGear.findAll({
    where: {
      playerId: id,
    },
  });
  const result = {};
  for (const { dataValues } of playerGear) {
    result[`slot_${dataValues.slotId}`] = result[`slot_${dataValues.slotId}`] || [];
    result[`slot_${dataValues.slotId}`].push(dataValues.itemId);
  }
  console.log(result);
  res.send(result);
});

module.exports = { router };
