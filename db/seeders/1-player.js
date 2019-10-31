
async function up(queryInterface) {
  const data = [
    {
      name: 'pattez',
      server: 'gehennas',
      gender: 2,
      race: 'Gnome',
      guild: 'APES',
      guildRank: 'member',
      level: 60,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];
  await queryInterface.bulkInsert('players', data, {});
}

async function down(queryInterface) {
  await queryInterface.bulkDelete('players', null, {});
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
