const Sequelize = require('sequelize');
const dbName = process.env.DB_NAME || 'postgres';
const dbUser = process.env.DB_USER || 'user';
const dbPassword = process.env.DB_PASSWORD || 'test';
const dbHost = process.env.DB_HOST || 'db';
const {setup} = require('./models')
const logging = false; // process.env.NODE_ENV === 'development';


const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'postgres',
  logging: logging ? console.log : false,
  benchmark: logging,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    paranoid: true,
    timestamps: false
  }
});
sequelize.authenticate().then(() => {
  console.log('Connected to database.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

setup(sequelize);

const models = sequelize.models;

module.exports = {sequelize, models};
