const express = require('express');
const advancedRouter = express.Router();
const advancedController = require('../Controllers/advanced.Controller');

advancedRouter.post('/submit', advancedController.dataSubmit);
advancedRouter.get('/datagetAll', advancedController.datagetAll);
advancedRouter.post('/getRequiredRatings', advancedController.getRequiredRatings);
advancedRouter.get('/getOnlyReviews', advancedController.getOnlyReviews);
advancedRouter.get('/addInventoryValues', advancedController.addInventoryValues);


module.exports = advancedRouter;
