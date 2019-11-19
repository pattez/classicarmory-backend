const Sequelize = require('sequelize');

const { Model } = Sequelize;

class uploader extends Model {}

const setup = (sequelize) => {
  uploader.init({
    id: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    ip: {
      type: Sequelize.STRING,
    },
    uploads: {
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATE,
    },
    banned: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  }, { sequelize });
};

module.exports = { setup };
