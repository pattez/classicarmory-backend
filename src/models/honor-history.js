const Sequelize = require('sequelize');

const { Model } = Sequelize;

class honorHistory extends Model {}

const setup = (sequelize) => {
  honorHistory.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    playerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'players',
        key: 'id',
      },
    },
    fromDate: {
      type: Sequelize.INTEGER,
    },
    toDate: {
      type: Sequelize.INTEGER,
    },
    guild: {
      type: Sequelize.STRING,
    },
    guildRank: {
      type: Sequelize.STRING,
    },
    level: {
      type: Sequelize.INTEGER,
    },
    honor: {
      type: Sequelize.INTEGER,
    },
    hk: {
      type: Sequelize.INTEGER,
    },
    rank: {
      type: Sequelize.SMALLINT,
    },
    honorProgress: {
      type: Sequelize.FLOAT,
    },
    standing: {
      type: Sequelize.INTEGER,
    },
  }, {
    sequelize,
    freezeTableName: true,
  });
};

module.exports = { setup };
