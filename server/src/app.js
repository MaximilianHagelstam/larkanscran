const express = require('express');
const menuRoutes = require('./routes/menuRoutes');

const app = express();

app.use(express.json());

app.use('/api/menu', menuRoutes);

module.exports = app;
