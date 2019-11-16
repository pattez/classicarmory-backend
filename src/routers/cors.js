const express = require('express');
const { FRONTEND_URL } = require('globals');

const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', FRONTEND_URL);
  res.header('Vary', 'Origin');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization',
  );
  next();
});

router.options('/*', (req, res) => {
  res.sendStatus(200);
});

module.exports = { router };
