const express = require('express');
const router = express.Router();
const {models} = require('../db');

const PLAYER_VALUES = {
  0: "uploader",
  1: "lastSeen",
  2: "server",
  3: "name",
  4: "guild",
  5: "guildRank",
  6: "level",
  7: "race",
  8: "gender"
};

const GEAR_VALUES = {
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 6,
  15: 7,
  16: 8,
  17: 9,
  18: 10,
  19: 11,
  20: 12,
  21: 13,
  22: 14,
  23: 15,
  24: 16,
  25: 17,
  27: 18,
  28: 19,
}

router.post('/upload', async (req, res) => {
  console.log(req.body);
  const { lua } = req.body;
  const mapped = lua.map((item) => {
    const i = item.split(',');
    const obj = {};
    for(const j in i) {
      if (i[j]) {
        obj['player'] = obj['player']  || {};
        obj['gear'] =  obj['gear'] || {};
        if (i[j] && i[j] === 'nil') {
          i[j] = null;
        }
        if (j <= 8) {
          obj['player'][PLAYER_VALUES[j]] = i[j];
        }
        if (j >= 9) {
          obj['gear'][`slot_${GEAR_VALUES[j]}`] = i[j];
        }
      }
    }
    return obj;
  })
  console.log('Done')
  for (const item of mapped) {
    const p = item.player;
    const g = item.gear;
    const player = await models.player.findOrCreate({
      where: {
        name: p.name,
        server: p.server
      },
      defaults: {
        ...p
      }
    });

    if (!player[1]) {
      player[0].update({
        ...p
      });
    }

    const playerGear = await models.playerGear.findOrCreate({
      where: {
        playerId: player[0].id
      },
      defaults: {
        ...g,
        playerId: player[0].id
      }
    });

    if(!playerGear[1]) {
      playerGear[0].update({
        ...g
      })
    }
  }
  res.send('Done')
});



module.exports = { router };
