
async function up(queryInterface) {
  const data = [
    {
      playerId: 1,
      slotId: 1,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 2,
      itemId: 17109
    },
    {
      playerId: 1,
      slotId: 3,
      itemId: 14633
    },
    {
      playerId: 1,
      slotId: 4,
      itemId: 14626
    },
    {
      playerId: 1,
      slotId: 6,
      itemId: 19136
    },
    {
      playerId: 1,
      slotId: 7,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 8,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 9,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 10,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 11,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 12,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 13,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 14,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 15,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 16,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 17,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 18,
      itemId: 16914
    },
    {
      playerId: 1,
      slotId: 19,
      itemId: 16914
    },
  ];
  await queryInterface.bulkInsert('playerGear', data, {});
}

async function down(queryInterface) {
  await queryInterface.bulkDelete('playerGear', null, {});
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
