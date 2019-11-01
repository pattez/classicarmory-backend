const Sequelize = require('sequelize');

const { Model } = Sequelize;

class gender extends Model {}

const setup = (sequelize) => {
  gender.init(
    {
      id: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { sequelize },
  );
};

module.exports = { setup };
