const { models } = require('../db');

const PRODUCTION = process.env.NODE_ENV === 'production';

const authentication = async (req, res, next) => {
  const { authorization } = req.headers;
  if (PRODUCTION) {
    const user = await models.uploader.findOne({ where: { password: authorization } });
    if (user) {
      return next();
    }
    return res.status(401).send('Not authorized');
  }
  return next();
};

module.exports = { authentication };
