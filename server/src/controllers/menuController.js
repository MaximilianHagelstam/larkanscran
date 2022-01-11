const axios = require('axios');
const { addDatePrefix } = require('../utils/dates');

const getToday = async (_req, res) => {
  const today = new Date();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const yearToday = addDatePrefix(today.getFullYear());
  const monthToday = addDatePrefix(today.getMonth() + 1);
  const dayToday = addDatePrefix(today.getDate());

  const yearTomorrow = addDatePrefix(tomorrow.getFullYear());
  const monthTomorrow = addDatePrefix(tomorrow.getMonth() + 1);
  const dayTomorrow = addDatePrefix(tomorrow.getDate());

  const { data } = await axios.get(
    `https://larkan.skolkalender.fi/kalender/Events?start=${yearToday}-${monthToday}-${dayToday}&end=${yearTomorrow}-${monthTomorrow}-${dayTomorrow}`
  );

  const { description } = data.find((item) => item.title === 'Lunch');

  res.json({ lunch: description });
};

module.exports = { getToday };
