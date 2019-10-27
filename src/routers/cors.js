const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, LUA'
  );
  next();
});

router.options('/*', (req, res) => {
  res.sendStatus(200);
});

module.exports = { router };
