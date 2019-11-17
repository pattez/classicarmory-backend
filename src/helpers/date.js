const DAY_MS = 60 * 60 * 24 * 1000;

const getDay = (date) => Math.floor(date.getTime() / DAY_MS);

const dayToDate = (day) => new Date(day * 86400000);

module.exports = {
  dayToDate,
  getDay,
};
