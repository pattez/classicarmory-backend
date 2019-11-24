const express = require('express');

const router = express.Router();
const Sequelize = require('sequelize');
const { getDay } = require('helpers/date');
const { SERVERS } = require('globals');
const { models, sequelize } = require('../db');

const { Op } = Sequelize;

const authorization = (req, res, next) => {
  const regions = ['eu', 'us'];
  const { region } = req.params;
  if (!region) {
    return res.send('No region');
  } if (regions.indexOf(region) === -1) {
    return res.send('No region');
  } if (req.headers.authorization && req.headers.authorization === '7xhXHSy3baAKdsgcxvYWuZJnsdcb37SAvxzhdt384') {
    return next();
  }
  return res.send('Unauthorized');
};

router.post('/jobs/test/:key', async (req, res) => {
  console.log('Starting test');
  console.log('params key', req.params.key);
  res.send('Done');
});


router.post('/jobs/aggregateHonor/:region', authorization, async (req, res) => {
  res.send('Started');
  console.log(new Date(), '- Starting weekly honor aggregating...');
  const { region } = req.params;

  const serverIds = Object.keys(SERVERS).filter((i) => SERVERS[i].region === region);
  const players = await models.player.findAll({
    where: {
      thisweekHonor: { [Op.gt]: 0 },
      thisweekHK: { [Op.gt]: 0 },
      serverId: serverIds,
    },
  });

  if (players.length > 0) {
    const today = new Date();
    const toDate = getDay(today);
    const fromDate = toDate - 7;
    const resolveString = (string) => {
      if (string && string.includes("'")) {
        return `'${string.replace("'", "''")}'`;
      }
      return string ? `'${string}'` : null;
    };
    let data = players.map((player) => `(${player.dataValues.id}, ${fromDate}, ${toDate}, ${resolveString(player.dataValues.guild)}, ${resolveString(player.dataValues.guildRank)}, ${player.dataValues.level}, ${player.dataValues.thisweekHonor}, ${player.dataValues.thisweekHK}, ${player.dataValues.rankNumber}, ${player.dataValues.honorProgress}, 0)`);

    data = data.join(',');
    const query = `INSERT INTO "honorHistory" ("playerId", "fromDate", "toDate", guild, "guildRank", level, honor, hk, rank, "honorProgress", standing) VALUES ${data}`;
    console.log(new Date(), '- Running insert query...');
    await sequelize.query(query);
    console.log(new Date(), '- Running update query...');
    await sequelize.query('UPDATE players SET "thisweekHonor" = 0, "thisweekHK" = 0, "lastweekHK" = 0, "lastweekHonor" = 0');
    console.log(new Date(), '- Honor aggregation done!');
  } else {
    console.log(new Date(), '- Honor aggregation done! - No players to aggregate.');
  }
});

module.exports = { router };
