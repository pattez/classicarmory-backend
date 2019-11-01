/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname);
const files = fs.readdirSync(directory);

const isModel = (f) => path.extname(f) === '.js' && f !== 'index.js';

const setup = (sequelize) => {
  for (const file of files) {
    const filePath = path.join(directory, file);
    if (isModel(file)) {
      const model = require(filePath);
      model.setup(sequelize);
    }
  }
};

module.exports = { setup };
