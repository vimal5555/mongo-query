const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
     tokenAddress: {
          type: String,
     },
     tokenId: {
          type: String,
     },
     rentalAmount: {
          type: String,
     },
     duration: {
          type: String,
     },
     beneficiary: {
          type: String,
     }
});

rentalSchema.index({ name: 1 });

module.exports = mongoose.model('Rental Backend', rentalSchema, "rentalList");