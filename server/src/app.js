const express = require('express');
const cors = require('cors');
const menuRoutes = require('./routes/menuRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/menu', menuRoutes);

module.exports = app;
