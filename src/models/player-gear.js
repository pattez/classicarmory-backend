const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const shortid = require('shortid');

class playerGear extends Model {}

const setup = (sequelize) => {
  playerGear.init({
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      defaultValue: shortid.generate
    },
    playerId: {
      type: Sequelize.STRING,
      primaryKey: true,
      references: {
        model: 'players',
        key: 'id'
      }
    },
    slot_1: {
      type: Sequelize.INTEGER
    },
    slot_2: {
      type: Sequelize.INTEGER
    },
    slot_3: {
      type: Sequelize.INTEGER
    },
    slot_4: {
      type: Sequelize.INTEGER
    },
    slot_5: {
      type: Sequelize.INTEGER
    },
    slot_6: {
      type: Sequelize.INTEGER
    },
    slot_7: {
      type: Sequelize.INTEGER
    },
    slot_8: {
      type: Sequelize.INTEGER
    },
    slot_9: {
      type: Sequelize.INTEGER
    },
    slot_10: {
      type: Sequelize.INTEGER
    },
    slot_11: {
      type: Sequelize.INTEGER
    },
    slot_12: {
      type: Sequelize.INTEGER
    },
    slot_13: {
      type: Sequelize.INTEGER
    },
    slot_14: {
      type: Sequelize.INTEGER
    },
    slot_15: {
      type: Sequelize.INTEGER
    },
    slot_16: {
      type: Sequelize.INTEGER
    },
    slot_17: {
      type: Sequelize.INTEGER
    },
    slot_18: {
      type: Sequelize.INTEGER
    },
    slot_19: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  }, { sequelize, freezeTableName: true });
}

module.exports = {setup};
