
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('uploaders', 'banned', { type: Sequelize.BOOLEAN, defaultValue: false });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('uploaders', 'banned');
  },
};
