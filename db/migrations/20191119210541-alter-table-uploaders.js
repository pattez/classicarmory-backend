
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DELETE FROM uploaders WHERE id > 0');
    await queryInterface.removeColumn('uploaders', 'password');
    await queryInterface.removeColumn('uploaders', 'name');
    await queryInterface.removeColumn('uploaders', 'id');
    await queryInterface.addColumn('uploaders', 'ip', { type: Sequelize.STRING });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('uploaders', 'ip');
    await queryInterface.addColumn('uploaders', 'password', { type: Sequelize.STRING });
    await queryInterface.addColumn('uploaders', 'name', { type: Sequelize.STRING });
    await queryInterface.addColumn('uploaders', 'id', { type: Sequelize.INTEGER, primaryKey: true });
  },
};
