const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class playerCurrentGear extends Model {}

const setup = (sequelize) => {
  playerCurrentGear.init({
    playerId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: 'players',
        key: 'id'
      }
    },
    slot_1: {
      type: Sequelize.SMALLINT
    },
    slot_2: {
      type: Sequelize.SMALLINT
    },
    slot_3: {
      type: Sequelize.SMALLINT
    },
    slot_4: {
      type: Sequelize.SMALLINT
    },
    slot_5: {
      type: Sequelize.SMALLINT
    },
    slot_6: {
      type: Sequelize.SMALLINT
    },
    slot_7: {
      type: Sequelize.SMALLINT
    },
    slot_8: {
      type: Sequelize.SMALLINT
    },
    slot_9: {
      type: Sequelize.SMALLINT
    },
    slot_10: {
      type: Sequelize.SMALLINT
    },
    slot_11: {
      type: Sequelize.SMALLINT
    },
    slot_12: {
      type: Sequelize.SMALLINT
    },
    slot_13: {
      type: Sequelize.SMALLINT
    },
    slot_14: {
      type: Sequelize.SMALLINT
    },
    slot_15: {
      type: Sequelize.SMALLINT
    },
    slot_16: {
      type: Sequelize.SMALLINT
    },
    slot_17: {
      type: Sequelize.SMALLINT
    },
    slot_18: {
      type: Sequelize.SMALLINT
    },
    slot_19: {
      type: Sequelize.SMALLINT
    }
  }, { sequelize, freezeTableName: true });
}

module.exports = {setup};
