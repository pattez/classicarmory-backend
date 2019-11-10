const { models } = require('../db');

const PRODUCTION = process.env.NODE_ENV === 'production';

const authentication = async (req, res, next) => {
  const { authorization } = req.headers;
  if (PRODUCTION) {
    const user = await models.uploader.findOne({
      where: { password: authorization },
      attributes: [
        'name',
        'password',
        'uploads',
      ],
    });
    if (user) {
      const { uploads } = user.dataValues;
      await user.update({ uploads: uploads + 1 });
      return next();
    }
    return res.status(401).send('Not authorized');
  }
  return next();
};

module.exports = { authentication };
