const gender = {
  1: 'Neutrum / Unknown',
  2: 'Male',
  3: 'Female',
};

const INVENTORY_IDS = {
  1: 'head',
  2: 'neck',
  3: 'shoulder',
  4: 'shirt',
  5: 'chest',
  6: 'waist',
  7: 'legs',
  8: 'feet',
  9: 'wrist',
  10: 'hands',
  11: 'finger 1',
  12: 'finger 2',
  13: 'trinket 1',
  14: 'trinket 2',
  15: 'back',
  16: 'main hand',
  17: 'off hand',
  18: 'ranged',
  19: 'tabard',
};

const ENCHANT_INVENTORY_IDS = {
  1: 'head',
  3: 'shoulder',
  5: 'chest',
  7: 'legs',
  8: 'feet',
  9: 'wrist',
  10: 'hands',
  15: 'back',
  16: 'main hand',
  17: 'off hand',
  18: 'ranged',
};

const ENCHANT_VALUES = {
  29: 1,
  30: 3,
  31: 5,
  32: 7,
  33: 8,
  34: 9,
  35: 10,
  36: 15,
  37: 16,
  38: 17,
  39: 18,
};

const SLOTS = [
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
];


const PLAYER_VALUES = {
  0: 'uploader',
  1: 'lastSeen',
  2: 'serverId',
  3: 'name',
  4: 'guild',
  5: 'guildRank',
  6: 'level',
  7: 'classId',
  8: 'raceId',
  9: 'genderId',
};

const GEAR_VALUES = {
  10: 1,
  11: 2,
  12: 3,
  13: 4,
  14: 5,
  15: 6,
  16: 7,
  17: 8,
  18: 9,
  19: 10,
  20: 11,
  21: 12,
  22: 13,
  23: 14,
  24: 15,
  25: 16,
  26: 17,
  27: 18,
  28: 19,
};

const HONOR_VALUES = {
  40: 'todayHK',
  41: 'todayHonor',
  42: 'yesterdayHK',
  43: 'yesterdayHonor',
  44: 'lifetimeHK',
  45: 'lifetimeRank',
};

module.exports = {
  gender,
  INVENTORY_IDS,
  PLAYER_VALUES,
  GEAR_VALUES,
  ENCHANT_INVENTORY_IDS,
  ENCHANT_VALUES,
  SLOTS,
  HONOR_VALUES,
};
