const express = require('express');
const menuController = require('../controllers/menuController');

const menuRouter = express.Router();

menuRouter.get('/today', menuController.getToday);

module.exports = menuRouter;
