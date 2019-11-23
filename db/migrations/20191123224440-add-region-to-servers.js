
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('servers', 'region', { type: Sequelize.STRING });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('servers', 'region');
  },
};
