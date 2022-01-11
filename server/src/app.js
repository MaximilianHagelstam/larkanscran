const express = require('express');
const cors = require('cors');
const foodRoutes = require('./routes/foodRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/food', foodRoutes);

module.exports = app;
