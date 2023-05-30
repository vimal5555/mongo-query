const express = require('express');
const trainRouter = express.Router();
const trainController = require('../Controllers/training.Controller');

trainRouter.post('/submit', trainController.dataSubmit);


module.exports = trainRouter;