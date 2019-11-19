const Sequelize = require('sequelize');

const { Model } = Sequelize;

class uploader extends Model {}

const setup = (sequelize) => {
  uploader.init({
    ip: {
      type: Sequelize.STRING,
    },
    uploads: {
      type: Sequelize.INTEGER,
    },
  }, { sequelize });
};

module.exports = { setup };
