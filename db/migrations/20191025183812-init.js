'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('players', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
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
      class: {
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
    });
    await queryInterface.createTable('playerGear', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('players');
    await queryInterface.dropTable('playerGear');
  }
};
