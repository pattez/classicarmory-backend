const {
  PLAYER_VALUES, GEAR_VALUES, ENCHANT_VALUES, HONOR_VALUES, VALID_ROW_LENGTH,
} = require('globals');
const {
  models: { server },
} = require('../db');

const validate = (row) => {
  if (row.length !== VALID_ROW_LENGTH) {
    return null;
  }
  return row;
};

const formatLua = async (lua) => {
  let data = lua.map((item) => {
    let i = item.split(',');
    i = validate(i);
    const obj = {};
    for (const j in i) {
      if (i[j]) {
        obj.player = obj.player || {};
        obj.gear = obj.gear || {};
        obj.enchant = obj.enchant || {};
        if (i[j] && i[j] === 'nil') {
          i[j] = null;
        }

        // Player
        if (j <= 9) {
          obj.player[PLAYER_VALUES[j]] = i[j];
        }

        // Honor
        if (j >= 40) {
          obj.player[HONOR_VALUES[j]] = i[j];
        }

        // Gear
        if (j >= 10 && j < 29) {
          obj.gear[`slot_${GEAR_VALUES[j]}`] = i[j];
        }

        // Enchant
        if (j >= 29 && j < 40) {
          obj.enchant[`slot_${ENCHANT_VALUES[j]}`] = i[j];
        }
      }
    }
    return obj;
  }).filter((i) => Object.keys(i).length > 0);
  const servers = await server.findAll();
  data = data.map((item) => {
    const s = servers.find((i) => i.name === item.player.serverId);
    const serverId = (s && s.id) || null;
    const row = {
      player: { ...item.player, serverId },
      gear: { ...item.gear },
      enchant: { ...item.enchant },
    };
    return row;
  });
  return data;
};

const getSlot = (string) => string.split('slot_')[1];


const formatGear = (gear) => {
  const data = gear.map(
    (i) => Object.keys(i.gear).map(
      (j) => (i.player.id && i.gear[j] ? `(${i.player.id}, ${getSlot(j)}, ${i.gear[j]}, ${i.enchant[j] ? i.enchant[j] : null})` : null),
    ).filter((x) => x),
  ).flat(Infinity);
  return data;
};

const formatPlayers = (players) => {
  const strings = ['uploader', 'lastSeen', 'name', 'guild', 'guildRank'];
  const parse = (key, i) => (strings.indexOf(key) > -1 ? `'${i}'` : i);
  const data = players.map((i) => `(${Object.keys(i).map((j) => parse(j, i[j]))})`);
  return data;
};


module.exports = { formatLua, formatGear, formatPlayers };
