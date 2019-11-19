const Sequelize = require('sequelize');

const { Model } = Sequelize;

class player extends Model {}

const resolveName = async (model, id) => {
  const data = await model.findOne({ where: { id } });
  return data.dataValues.name;
};

const getServer = async (sequelize, id) => resolveName(sequelize.models.server, id);

const setup = (sequelize) => {
  player.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uploader: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastSeen: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    raceId: {
      type: Sequelize.SMALLINT,
      references: {
        model: 'races',
        key: 'id',
      },
    },
    classId: {
      type: Sequelize.SMALLINT,
      references: {
        model: 'classes',
        key: 'id',
      },
    },
    genderId: {
      type: Sequelize.SMALLINT,
      references: {
        model: 'genders',
        key: 'id',
      },
    },
    serverId: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      references: {
        model: 'servers',
        key: 'id',
      },
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
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    todayHK: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    yesterdayHK: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    yesterdayHonor: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    lifetimeHK: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    lifetimeRank: {
      type: Sequelize.SMALLINT,
      defaultValue: 0,
    },
    honorProgress: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    rankNumber: {
      type: Sequelize.SMALLINT,
      defaultValue: 0,
    },
    thisweekHK: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    thisweekHonor: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    lastweekHK: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    lastweekHonor: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    lastweekStanding: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    lifetimeDK: {
      type: Sequelize.SMALLINT,
      defaultValue: 0,
    },
    uploaderId: {
      type: Sequelize.INTEGER,
    },
  }, {
    hooks: {
    },
    sequelize,
  });
};

module.exports = { setup };
