const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class server extends Model {}

const setup = (sequelize) => {
  server.init({
    id: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
    }
  }, { sequelize });
}

module.exports = {setup};
