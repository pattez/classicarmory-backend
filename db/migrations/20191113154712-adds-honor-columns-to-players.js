
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('players', 'todayHK', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
    await queryInterface.addColumn('players', 'todayHonor', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
    await queryInterface.addColumn('players', 'yesterdayHK', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });

    await queryInterface.addColumn('players', 'yesterdayHonor', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });

    await queryInterface.addColumn('players', 'lifetimeHK', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });

    await queryInterface.addColumn('players', 'lifetimeRank', {
      type: Sequelize.SMALLINT,
      defaultValue: 0,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('players', 'todayHK');
    await queryInterface.removeColumn('players', 'todayHonor');
    await queryInterface.removeColumn('players', 'yesterdayHK');
    await queryInterface.removeColumn('players', 'yesterdayHonor');
    await queryInterface.removeColumn('players', 'lifetimeHK');
    await queryInterface.removeColumn('players', 'lifetimeRank');
  },
};
