const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class race extends Model {}

const setup = (sequelize) => {
  race.init({
    id: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, { sequelize });
}

module.exports = {setup};
