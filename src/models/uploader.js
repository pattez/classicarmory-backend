const Sequelize = require('sequelize');

const { Model } = Sequelize;

class uploader extends Model {}

const setup = (sequelize) => {
  uploader.init({
    id: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    uploads: {
      type: Sequelize.INTEGER,
    },
  }, { sequelize });
};

module.exports = { setup };
