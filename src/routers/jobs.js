const express = require('express');

const router = express.Router();
const Sequelize = require('sequelize');
const { getDay } = require('helpers/date');
const { models, sequelize } = require('../db');

const { Op } = Sequelize;

const authorization = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization === '7xhXHSy3baAKdsgcxvYWuZJnsdcb37SAvxzhdt384') {
    return next();
  }
  return res.send('Unauthorized');
};

router.post('/test', authorization, async (req, res) => {
  res.send('WEEEE');
});


router.post('/aggregateHonor', authorization, async (req, res) => {
  res.send('Started');
  console.log(new Date(), '- Starting weekly honor aggregating...');
  const players = models.player.findAll({
    where: {
      thisweekHonor: { [Op.not]: 0 },
      thisweekHK: { [Op.not]: 0 },
    },
  });
  const today = new Date();
  const toDate = getDay(today);
  const fromDate = toDate - 7;

  let data = await players.map((player) => `(${player.dataValues.id}, ${fromDate}, ${toDate}, '${player.dataValues.guild}', '${player.dataValues.guildRank}', ${player.dataValues.level}, ${player.dataValues.thisweekHonor}, ${player.dataValues.thisweekHK}, ${player.dataValues.rankNumber}, ${player.dataValues.honorProgress}, 0)`);

  data = data.join(',');
  const query = `INSERT INTO "honorHistory" ("playerId", "fromDate", "toDate", guild, "guildRank", level, honor, hk, rank, "honorProgress", standing) VALUES ${data}`;
  console.log(new Date(), '- Running insert query...');
  await sequelize.query(query);
  console.log(new Date(), '- Running update query...');
  await sequelize.query('UPDATE players SET "thisweekHonor" = 0, "thisweekHK" = 0, "lastweekHK" = 0, "lastweekHonor" = 0');
  console.log(new Date(), '- Honor aggregation done!');
});

module.exports = { router };
