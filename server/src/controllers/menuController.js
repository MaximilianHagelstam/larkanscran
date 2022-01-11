const axios = require('axios');

const getToday = async (_req, res) => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  console.log(year, month, day);

  const { data } = await axios.get(
    'https://larkan.skolkalender.fi/kalender/Events?start=2022-01-11&end=2022-01-12'
  );
  console.log(data);

  res.json({ message: 'Hello team!' });
};

module.exports = { getToday };
