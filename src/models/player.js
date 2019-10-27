const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const shortid = require('shortid');

class player extends Model {}

const setup = (sequelize) => {
  player.init({
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      defaultValue: shortid.generate
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
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.INTEGER,
    },
    server: {
      type: Sequelize.STRING,
      allowNull: false
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
  }, { sequelize });
}

module.exports = {setup};
