const Sequelize = require('sequelize');

const { Model } = Sequelize;

class uploader extends Model {}

const setup = (sequelize) => {
  uploader.init({
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, { sequelize });
};

module.exports = { setup };
