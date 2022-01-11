const express = require('express');
const foodController = require('../controllers/foodController');

const foodRouter = express.Router();

foodRouter.get('/today', foodController.getTodaysLunch);

module.exports = foodRouter;
