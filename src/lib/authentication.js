const { models } = require('../db');

const PRODUCTION = process.env.NODE_ENV === 'production';

const authentication = async (req, res, next) => {
  const { authorization } = req.body;
  if (PRODUCTION) {
    const user = await models.uploader.findOne({
      where: { password: authorization },
    });
    console.log(user.dataValues.name, authorization);
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
