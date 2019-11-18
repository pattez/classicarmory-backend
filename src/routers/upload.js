const express = require('express');

const router = express.Router();
const { formatLua, formatGear } = require('helpers/upload');
const rateLimit = require('express-rate-limit');
const atob = require('atob');
const { getDay } = require('helpers/date');
const Sequelize = require('sequelize');
const { models, sequelize } = require('../db');

const { Op } = Sequelize;
const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 100 requests per windowMs
  message: 'Too many uploads from this IP. Try again in 15minutes',
});

const validate = async (req, res, next) => {
  const { lua } = req.body;
  if (!lua) {
    return res.send('Bad data');
  } if (lua && lua.length === 0) {
    return res.send('No data');
  }
  return next();
};

router.post('/upload', validate, uploadLimiter, async (req, res) => {
  console.log(req.headers['content-length']);
  console.log(req.connection.remoteAddress);
  req.setTimeout(900000);
  res.send('Done');
  const { lua } = req.body;

  const parsed = atob(lua);
  const arr = parsed.split('z27e8');
  let data = await formatLua(arr);
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
      if (+new Date(p.lastSeen) >= +new Date(player[0].dataValues.lastSeen)) {
        await playerCurrentGear[0].update({
          ...g,
        });
      }
    }
    if (!player[1]) {
      if (+new Date(p.lastSeen) >= +new Date(player[0].dataValues.lastSeen)) {
        const date = getDay(new Date());
        const honorHistory = await models.honorHistory.findOne({
          where: {
            playerId: player[0].dataValues.id,
            fromDate: {
              [Op.between]: [date - 7, date],
            },
          },
        });

        if (honorHistory) {
          await honorHistory.update({
            standing: p.lastweekStanding,
          });
        }

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
    console.log('Starting gear insert...');
    const gear = formatGear(data);
    const gearUnique = Array.from(new Set(gear));
    console.log('Gear rows:', gearUnique.length);
    const gearQuery = `INSERT INTO "playerGear" ("playerId", "slotId", "itemId", "enchantId") VALUES ${gearUnique} ON CONFLICT ("playerId", "slotId", "itemId") DO UPDATE SET "enchantId" = excluded."enchantId"`;
    await sequelize.query(gearQuery);
  }

  console.log('Done', new Date());
});

module.exports = { router };
