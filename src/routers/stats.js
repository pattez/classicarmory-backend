
const express = require('express');

const router = express.Router();
const { sequelize } = require('../db');


router.get('/stats/servers', async (req, res) => {
  const query = `SELECT servers.name,
    servers.region,
    servers.type,
    sum(case when "raceId" in (1,2,3,4,5,6,7,8) then 1 else 0 end) as total,
    sum(case when "raceId" in (1,3,4,7) then 1 else 0 end) as alliance,
    sum(case when "raceId" in (2,5,6,8) then 1 else 0 end) as horde
  FROM servers
  LEFT JOIN players ON players."serverId" = servers.id
  GROUP BY servers.name, servers.region, servers.type
  ORDER BY total DESC`;

  let servers = [0];
  let total = 0;
  servers = await sequelize.query(query);
  if (servers) {
    total = servers[0].map((i) => parseInt(i.total)).reduce((a, b) => a + b);
    servers = servers[0].map((i) => ({
      ...i,
      total: parseInt(i.total),
      horde: parseInt(i.horde),
      alliance: parseInt(i.alliance),
    }));
  }
  res.send({ servers, total });
});

module.exports = { router };
