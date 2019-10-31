'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('servers', {
      id: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
    await queryInterface.createTable('races', {
      id: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
    await queryInterface.createTable('genders', {
      id: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
    await queryInterface.createTable('classes', {
      id: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
    await queryInterface.createTable('players', {
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
        references: {
          model: 'races',
          key: 'id'
        }
      },
      class: {
        type: Sequelize.SMALLINT,
        references: {
          model: 'classes',
          key: 'id'
        }
      },
      gender: {
        type: Sequelize.SMALLINT,
        references: {
          model: 'genders',
          key: 'id'
        }
      },
      server: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'servers',
          key: 'id'
        }
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
    });
    await queryInterface.createTable('playerGear', {
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
    });
    await queryInterface.createTable('playerCurrentGear', {
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('players');
    await queryInterface.dropTable('playerGear');
  }
};
