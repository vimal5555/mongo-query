const express = require('express');
const rentalRouter = express.Router();
const rentalController = require('../Controllers/rental.Controller.js');

rentalRouter.post('/rentalSubmit', rentalController.rentalSubmit);
rentalRouter.post('/lendingNFT', rentalController.lendSubmitByUser)

rentalRouter.get('/getRental', rentalController.getRental);


module.exports = rentalRouter;