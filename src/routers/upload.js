const express = require('express');

const router = express.Router();
const { formatLua, formatGear } = require('helpers/upload');
const { models, sequelize } = require('../db');

router.post('/upload', async (req, res) => {
  req.setTimeout(900000);
  res.send('Done');
  const { lua } = req.body;
  const data = await formatLua(lua);
  for (const item of data) {
    const p = item.player;
    const g = item.gear;
    const player = await models.player.findOrCreate({
      where: {
        name: p.name,
      },
      defaults: {
        ...p,
      },
    });
    item.player.id = player[0].id;

    if (!player[1]) {
      player[0].update({
        ...p,
      });
    }

    const playerCurrentGear = await models.playerCurrentGear.findOrCreate({
      where: {
        playerId: player[0].id,
      },
      defaults: {
        ...g,
        playerId: player[0].id,
      },
    });
    if (!playerCurrentGear[1]) {
      playerCurrentGear[0].update({
        ...g,
      });
    }
  }

  // const players = formatPlayers(data.map((i) => i.player));
  // console.log(players);
  // const playerQuery = `INSERT INTO players
  // (uploader, "lastSeen",
  // name, "raceId", "classId", "genderId", "serverId", guild, "guildRank", level)
  //  VALUES ${players} ON CONFLICT UPDATE`;
  // await sequelize.query(playerQuery);

  const gear = formatGear(data);
  const gearQuery = `INSERT INTO "playerGear" ("playerId", "slotId", "itemId") VALUES ${gear} ON CONFLICT DO NOTHING`;
  await sequelize.query(gearQuery);

  console.log('Done', new Date());
});

module.exports = { router };
