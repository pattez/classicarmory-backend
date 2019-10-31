const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class player extends Model {}

const setup = (sequelize) => {
  player.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uploader: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastSeen: {
      allowNull: false,
      type: Sequelize.DATE
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    race: {
      type: Sequelize.SMALLINT,
    },
    class: {
      type: Sequelize.SMALLINT,
    },
    gender: {
      type: Sequelize.SMALLINT,
    },
    server: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    guild: {
      type: Sequelize.STRING,
    },
    guildRank: {
      type: Sequelize.STRING,
    },
    level: {
      type: Sequelize.SMALLINT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, { sequelize });
}

module.exports = {setup};
