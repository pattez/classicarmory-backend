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
    date: {
      type: Sequelize.DATE,
    },
  }, { sequelize });
};

module.exports = { setup };
