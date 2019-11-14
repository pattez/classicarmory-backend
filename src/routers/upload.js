const express = require('express');

const router = express.Router();
const { formatLua, formatGear } = require('helpers/upload');
const { authentication } = require('lib/authentication');
const { models, sequelize } = require('../db');

const validate = async (req, res, next) => {
  const { lua } = req.body;
  if (!lua) {
    return res.send('Bad data');
  } if (lua && lua.length > 500) {
    return res.send('Data too big');
  }
  return next();
};

router.post('/upload', validate, authentication, async (req, res) => {
  console.log(req.headers['content-length']);
  req.setTimeout(900000);
  res.send('Done');
  const { lua } = req.body;
  let data = await formatLua(lua);
  console.log('Data length:', data.length);
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
      if (+new Date(p.lastSeen) > +new Date(player[0].dataValues.lastSeen)) {
        await playerCurrentGear[0].update({
          ...g,
        });
      }
    }
    if (!player[1]) {
      if (+new Date(p.lastSeen) > +new Date(player[0].dataValues.lastSeen)) {
        await player[0].update({
          ...p,
        });
      } else {
        delete item.gear;
        delete item.player;
        delete item.enchant;
      }
    }
  }

  data = data.filter((d) => Object.keys(d).length !== 0);

  if (data.length > 0) {
    console.log('Starting gear insert');
    const gear = formatGear(data);
    const gearUnique = Array.from(new Set(gear));
    console.log('Gear rows:', gearUnique.length);
    const gearQuery = `INSERT INTO "playerGear" ("playerId", "slotId", "itemId", "enchantId") VALUES ${gearUnique} ON CONFLICT ("playerId", "slotId", "itemId") DO UPDATE SET "enchantId" = excluded."enchantId"`;
    await sequelize.query(gearQuery);
  }


  console.log('Done', new Date());
});

module.exports = { router };
