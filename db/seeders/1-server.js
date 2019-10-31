
async function up(queryInterface) {
  const data = [
    {name: 'Ashbringer', type: 'PVP'},
    {name: 'Bloodfang', type: 'PVP'},
    {name: 'Dragonfang', type: 'PVP'},
    {name: 'Dreadmist', type: 'PVP '},
    {name: 'Earthshaker', type: 'PVP'},
    {name: 'Firemaw', type: 'PVP'},
    {name: 'Flamelash', type: 'PVP'},
    {name: 'Gandling', type: 'PVP'},
    {name: 'Gehennas', type: 'PVP'},
    {name: 'Golemagg', type: 'PVP'},
    {name: 'Hydraxian Waterlords', type: 'RP'},
    {name: 'Judgement', type: 'PVP'},
    {name: 'Mirage Raceway', type: 'Normal'},
    {name: 'Mograine', type: 'PVP'},
    {name: 'Nethergarde Keep', type: 'Normal'},
    {name: 'Noggenfogger', type: 'PVP'},
    {name: 'Pyrewood Village', type: 'Normal'},
    {name: 'Razorgore', type: 'PVP'},
    {name: 'Shazzrah', type: 'PVP'},
    {name: 'Skullflame', type: 'PVP'},
    {name: 'Stonespine', type: 'PVP'},
    {name: 'Ten Storms', type: 'PVP'},
    {name: 'Zandalar Tribe', type: 'RPPVP'},
  ];
  await queryInterface.bulkInsert('servers', data, {});
}

async function down(queryInterface) {
  await queryInterface.bulkDelete('servers', null, {});
}

module.exports = {
  up: (queryInterface, Sequelize) => up(queryInterface, Sequelize), /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      re
      id: shortid.generate(),turn queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


  down: (queryInterface, Sequelize) => down(queryInterface, Sequelize)
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

};
