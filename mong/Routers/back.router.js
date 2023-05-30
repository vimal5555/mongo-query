const express = require('express');
const backRouter = express.Router();
const backController = require('../Controllers/back.Controller.js');

backRouter.post('/submit', backController.dataSubmit);
backRouter.get('/getAllData', backController.dataGetAll);
backRouter.post('/getActiveData', backController.dataGetActive);
backRouter.post('/getTagDetails', backController.dataGetTagsDetails);
backRouter.post('/getAgeDetails', backController.dataGetAgeDetails);

backRouter.get('/getSpecificDetails', backController.dataGetSpecificDetails);
backRouter.get('/getTagsCount', backController.dataGetTagsCount);
backRouter.get('/getAggResults', backController.dataGetAggResults);

module.exports = backRouter;