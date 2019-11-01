
async function up(queryInterface) {
  const data = [
    {
      name: 'Neutrum / Unknown',
    },
    {
      name: 'female',
    },
    {
      name: 'male',
    },
  ];
  await queryInterface.bulkInsert('genders', data, {});
}

async function down(queryInterface) {
  await queryInterface.bulkDelete('genders', null, {});
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
