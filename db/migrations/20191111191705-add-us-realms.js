
module.exports = {
  up: async (queryInterface) => {
    const data = [
      { name: 'Anathema', type: 'PvP' },
      { name: 'Arcanite Reaper', type: 'PvP' },
      { name: 'Arugal', type: 'PvP' },
      { name: 'Ashkandi', type: 'PvE' },
      { name: 'Atiesh', type: 'PvE' },
      { name: 'Azuresong', type: 'PvE' },
      { name: 'Benediction', type: 'PvP' },
      { name: 'Bigglesworth', type: 'PvP' },
      { name: 'Blaumeux', type: 'PvP' },
      { name: 'Bloodsail Buccaneers', type: 'RP' },
      { name: 'Deviate Delight', type: 'PvPRP' },
      { name: 'Earthfury', type: 'PvP' },
      { name: 'Faerlina', type: 'PvP' },
      { name: 'Fairbanks', type: 'PvP' },
      { name: 'Felstriker', type: 'PvP' },
      { name: 'Grobbulus', type: 'PvPRP' },
      { name: 'Heartseeker', type: 'PvP' },
      { name: 'Herod', type: 'PvP' },
      { name: 'Incendius', type: 'PvP' },
      { name: 'Kirtonos', type: 'PvP' },
      { name: 'Kromcrush', type: 'PvP' },
      { name: 'Kurinnaxx', type: 'PvP' },
      { name: 'Loatheb', type: 'PvP' },
      { name: 'Mankrik', type: 'PvE' },
      { name: 'Myzrael', type: 'PvE' },
      { name: 'Netherwind', type: 'PvP' },
      { name: 'Old Blanchy', type: 'PvE' },
      { name: 'Pagle', type: 'PvE' },
      { name: 'Rattlegore', type: 'PvP' },
      { name: 'Remulos', type: 'PvE' },
      { name: 'Skeram', type: 'PvP' },
      { name: 'Smolderweb', type: 'PvP' },
      { name: 'Stalagg', type: 'PvP' },
      { name: "Sul'thraze", type: 'PvP' },
      { name: 'Sulfuras', type: 'PvP' },
      { name: 'Thalnos', type: 'PvP' },
      { name: 'Thunderfury', type: 'PvP' },
      { name: 'Westfall', type: 'PvE' },
      { name: 'Whitemane', type: 'PvP' },
      { name: 'Windseeker', type: 'PvE' },
      { name: 'Yojamba', type: 'PvP' },
    ];
    await queryInterface.bulkInsert('servers', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('servers', null, {});
  },
};
