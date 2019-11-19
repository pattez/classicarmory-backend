
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('players', 'uploaderId', { type: Sequelize.INTEGER });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('players', 'uploaderId');
  },
};
