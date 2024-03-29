
async function up(queryInterface) {
  const data = [
    { name: 'Human', faction: 'Alliance' },
    { name: 'Orc', faction: 'Horde' },
    { name: 'Dwarf', faction: 'Alliance' },
    { name: 'Night Elf', faction: 'Alliance' },
    { name: 'Undead', faction: 'Horde' },
    { name: 'Tauren', faction: 'Horde' },
    { name: 'Gnome', faction: 'Alliance' },
    { name: 'Troll', faction: 'Horde' },
  ];
  await queryInterface.bulkInsert('races', data, {});
}

async function down(queryInterface) {
  await queryInterface.bulkDelete('races', null, {});
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


  down: (queryInterface, Sequelize) => down(queryInterface, Sequelize),
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

};
