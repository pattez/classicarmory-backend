const { models } = require('../db');

const getModelNames = async (data, attributes) => {
  const result = {};
  const differentModels = [{ model: 'class', newTarget: 'classes' }];
  const replace = (target) => {
    const m = differentModels.find((i) => i.model === target);
    if (m) {
      return m.newTarget;
    }
    return target;
  };


  for (const item of data) {
    const r = await models[replace(item.model)].findOne({
      where: {
        id: item.id,
      },
      attributes,
    });
    result[item.model] = r.name;
  }
  return result;
};

module.exports = { getModelNames };
