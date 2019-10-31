const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class playerGear extends Model {}

const setup = (sequelize) => {
  playerGear.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    playerId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: 'players',
        key: 'id'
      }
    },
    slot: {
      type: Sequelize.SMALLINT,
    },
    itemId: {
      type: Sequelize.SMALLINT
    }
  }, { sequelize, freezeTableName: true });
}

module.exports = {setup};
