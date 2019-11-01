const Sequelize = require('sequelize');

const { Model } = Sequelize;

class classes extends Model {}

const setup = (sequelize) => {
  classes.init({
    id: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, { sequelize, freezeTableName: true });
};

module.exports = { setup };
