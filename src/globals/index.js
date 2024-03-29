const FRONTEND_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://classicarmory.org';

const CURRENT_ADDON_VERSION = 1.4;

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

const HORDE = [2, 5, 6, 8];
const ALLIANCE = [1, 3, 4, 7];

const CLASSES = {
  1: 'Warrior',
  2: 'Paladin',
  3: 'Hunter',
  4: 'Rogue',
  5: 'Priest',
  6: 'DeathKnight',
  7: 'Shaman',
  8: 'Mage',
  9: 'Warlock',
  10: 'Monk',
  11: 'Druid',
  12: 'Demon',
};

const RACES = {
  1: { name: 'Human', faction: 'Alliance' },
  2: { name: 'Orc', faction: 'Horde' },
  3: { name: 'Dwarf', faction: 'Alliance' },
  4: { name: 'Night Elf', faction: 'Alliance' },
  5: { name: 'Undead', faction: 'Horde' },
  6: { name: 'Tauren', faction: 'Horde' },
  7: { name: 'Gnome', faction: 'Alliance' },
  8: { name: 'Troll', faction: 'Horde' },
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

const SERVERS = {
  1: { name: 'Ashbringer', type: 'PVP', region: 'eu' },
  2: { name: 'Bloodfang', type: 'PVP', region: 'eu' },
  3: { name: 'Dragonfang', type: 'PVP', region: 'eu' },
  4: { name: 'Dreadmist', type: 'PVP ', region: 'eu' },
  5: { name: 'Earthshaker', type: 'PVP', region: 'eu' },
  6: { name: 'Firemaw', type: 'PVP', region: 'eu' },
  7: { name: 'Flamelash', type: 'PVP', region: 'eu' },
  8: { name: 'Gandling', type: 'PVP', region: 'eu' },
  9: { name: 'Gehennas', type: 'PVP', region: 'eu' },
  10: { name: 'Golemagg', type: 'PVP', region: 'eu' },
  11: { name: 'Hydraxian Waterlords', type: 'RP', region: 'eu' },
  12: { name: 'Judgement', type: 'PVP', region: 'eu' },
  13: { name: 'Mirage Raceway', type: 'Normal', region: 'eu' },
  14: { name: 'Mograine', type: 'PVP', region: 'eu' },
  15: { name: 'Nethergarde Keep', type: 'Normal', region: 'eu' },
  16: { name: 'Noggenfogger', type: 'PVP', region: 'eu' },
  17: { name: 'Pyrewood Village', type: 'Normal', region: 'eu' },
  18: { name: 'Razorgore', type: 'PVP', region: 'eu' },
  19: { name: 'Shazzrah', type: 'PVP', region: 'eu' },
  20: { name: 'Skullflame', type: 'PVP', region: 'eu' },
  21: { name: 'Stonespine', type: 'PVP', region: 'eu' },
  22: { name: 'Ten Storms', type: 'PVP', region: 'eu' },
  23: { name: 'Zandalar Tribe', type: 'RPPVP', region: 'eu' },
  24: { name: 'Anathema', type: 'PvP', region: 'us' },
  25: { name: 'Arcanite Reaper', type: 'PvP', region: 'us' },
  26: { name: 'Arugal', type: 'PvP', region: 'us' },
  27: { name: 'Ashkandi', type: 'PvE', region: 'us' },
  28: { name: 'Atiesh', type: 'PvE', region: 'us' },
  29: { name: 'Azuresong', type: 'PvE', region: 'us' },
  30: { name: 'Benediction', type: 'PvP', region: 'us' },
  31: { name: 'Bigglesworth', type: 'PvP', region: 'us' },
  32: { name: 'Blaumeux', type: 'PvP', region: 'us' },
  33: { name: 'Bloodsail Buccaneers', type: 'RP', region: 'us' },
  34: { name: 'Deviate Delight', type: 'PvPRP', region: 'us' },
  35: { name: 'Earthfury', type: 'PvP', region: 'us' },
  36: { name: 'Faerlina', type: 'PvP', region: 'us' },
  37: { name: 'Fairbanks', type: 'PvP', region: 'us' },
  38: { name: 'Felstriker', type: 'PvP', region: 'us' },
  39: { name: 'Grobbulus', type: 'PvPRP', region: 'us' },
  40: { name: 'Heartseeker', type: 'PvP', region: 'us' },
  41: { name: 'Herod', type: 'PvP', region: 'us' },
  42: { name: 'Incendius', type: 'PvP', region: 'us' },
  43: { name: 'Kirtonos', type: 'PvP', region: 'us' },
  44: { name: 'Kromcrush', type: 'PvP', region: 'us' },
  45: { name: 'Kurinnaxx', type: 'PvP', region: 'us' },
  46: { name: 'Loatheb', type: 'PvP', region: 'us' },
  47: { name: 'Mankrik', type: 'PvE', region: 'us' },
  48: { name: 'Myzrael', type: 'PvE', region: 'us' },
  49: { name: 'Netherwind', type: 'PvP', region: 'us' },
  50: { name: 'Old Blanchy', type: 'PvE', region: 'us' },
  51: { name: 'Pagle', type: 'PvE', region: 'us' },
  52: { name: 'Rattlegore', type: 'PvP', region: 'us' },
  53: { name: 'Remulos', type: 'PvE', region: 'us' },
  54: { name: 'Skeram', type: 'PvP', region: 'us' },
  55: { name: 'Smolderweb', type: 'PvP', region: 'us' },
  56: { name: 'Stalagg', type: 'PvP', region: 'us' },
  57: { name: "Sul'thraze", type: 'PvP', region: 'us' },
  58: { name: 'Sulfuras', type: 'PvP', region: 'us' },
  59: { name: 'Thalnos', type: 'PvP', region: 'us' },
  60: { name: 'Thunderfury', type: 'PvP', region: 'us' },
  61: { name: 'Westfall', type: 'PvE', region: 'us' },
  62: { name: 'Whitemane', type: 'PvP', region: 'us' },
  63: { name: 'Windseeker', type: 'PvE', region: 'us' },
  64: { name: 'Yojamba', type: 'PvP', region: 'us' },
  65: { name: 'Celebras', type: 'RP', region: 'eu' },
  66: { name: "Dragon's Call", type: 'PvP', region: 'eu' },
  67: { name: 'Everlook', type: 'PvE', region: 'eu' },
  68: { name: 'Heartstriker', type: 'PvP', region: 'eu' },
  69: { name: 'Lakeshire', type: 'PvE', region: 'eu' },
  70: { name: 'Lucifron', type: 'PvP', region: 'eu' },
  71: { name: 'Patchwerk', type: 'PvP', region: 'eu' },
  72: { name: 'Razorfen', type: 'PvE', region: 'eu' },
  73: { name: 'Transcendence', type: 'PvP', region: 'eu' },
  74: { name: 'Venoxis', type: 'PvP', region: 'eu' },
  75: { name: 'Mandokir', type: 'PvP', region: 'eu' },
  76: { name: 'Amnennar', type: 'PvP', region: 'eu' },
  77: { name: 'Auberdine', type: 'PvE', region: 'eu' },
  78: { name: 'Finkle', type: 'PvP', region: 'eu' },
  79: { name: 'Sulfuron', type: 'PvP', region: 'eu' },
  80: { name: 'Chromie', type: 'PvE', region: 'eu' },
  81: { name: 'Flamegor', type: 'PvP', region: 'eu' },
  82: { name: 'Harbinger of Doom', type: 'PvP', region: 'eu' },
  83: { name: "Rhok'delar", type: 'PvP', region: 'eu' },
  84: { name: 'Wyrmthalak', type: 'PvP', region: 'eu' },
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
  41: 'yesterdayHK',
  42: 'yesterdayHonor',
  43: 'lifetimeHK',
  44: 'honorProgress',
  45: 'rankNumber',
  46: 'thisweekHK',
  47: 'thisweekHonor',
  48: 'lastweekHK',
  49: 'lastweekHonor',
  50: 'lastweekStanding',
  51: 'lifetimeDK',
  52: 'lifetimeRank',
};


const VALID_ROW_LENGTH = Object.keys(GEAR_VALUES).length + Object.keys(HONOR_VALUES).length
+ Object.keys(ENCHANT_VALUES).length + Object.keys(PLAYER_VALUES).length;

module.exports = {
  gender,
  INVENTORY_IDS,
  PLAYER_VALUES,
  GEAR_VALUES,
  ENCHANT_INVENTORY_IDS,
  ENCHANT_VALUES,
  SLOTS,
  HONOR_VALUES,
  RACES,
  FRONTEND_URL,
  CLASSES,
  SERVERS,
  VALID_ROW_LENGTH,
  CURRENT_ADDON_VERSION,
  HORDE,
  ALLIANCE,
};
