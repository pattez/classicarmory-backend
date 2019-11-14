
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('players', 'honorProgress', {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    });

    await queryInterface.addColumn('players', 'rankNumber', {
      type: Sequelize.SMALLINT,
      defaultValue: 0,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('players', 'honorProgress');
    await queryInterface.removeColumn('players', 'rankNumber');
  },
};
