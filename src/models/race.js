const Sequelize = require('sequelize');

const { Model } = Sequelize;

class race extends Model {}

const setup = (sequelize) => {
  race.init({
    id: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    faction: {
      type: Sequelize.STRING,
    },
  }, { sequelize });
};

module.exports = { setup };
