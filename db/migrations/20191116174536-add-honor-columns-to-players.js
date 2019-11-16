
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('players', 'thisweekHK', { type: Sequelize.INTEGER, defaultValue: 0 });
    await queryInterface.addColumn('players', 'thisweekHonor', { type: Sequelize.INTEGER, defaultValue: 0 });
    await queryInterface.addColumn('players', 'lastweekHK', { type: Sequelize.INTEGER, defaultValue: 0 });
    await queryInterface.addColumn('players', 'lastweekHonor', { type: Sequelize.INTEGER, defaultValue: 0 });
    await queryInterface.addColumn('players', 'lastweekStanding', { type: Sequelize.INTEGER, defaultValue: 0 });
    await queryInterface.addColumn('players', 'lifetimeDK', { type: Sequelize.SMALLINT, defaultValue: 0 });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('players', 'thisweekHK')
    await queryInterface.removeColumn('players', 'thisweekHonor')
    await queryInterface.removeColumn('players', 'lastweekHK')
    await queryInterface.removeColumn('players', 'lastweekHonor')
    await queryInterface.removeColumn('players', 'lastweekStanding')
    await queryInterface.removeColumn('players', 'lifetimeDK')
  },
};
