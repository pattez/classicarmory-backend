async function up(queryInterface) {
  const data = [
    { name: "Warrior" },
    { name: "Paladin" },
    { name: "Hunter" },
    { name: "Rogue" },
    { name: "Priest" },
    { name: "DeathKnight" },
    { name: "Shaman" },
    { name: "Mage" },
    { name: "Warlock" },
    { name: "Monk" },
    { name: "Druid" },
    { name: "Demon" }
  ];
  await queryInterface.bulkInsert("classes", data, {});
}

async function down(queryInterface) {
  await queryInterface.bulkDelete("classes", null, {});
}

module.exports = {
  up: (queryInterface, Sequelize) =>
    up(
      queryInterface,
      Sequelize
    ) /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      re
      id: shortid.generate(),turn queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */,

  down: (queryInterface, Sequelize) => down(queryInterface, Sequelize)
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
};
