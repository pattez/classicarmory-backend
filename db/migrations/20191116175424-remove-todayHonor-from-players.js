
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('players', 'todayHonor');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('players', 'todayHonor', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
  },
};
