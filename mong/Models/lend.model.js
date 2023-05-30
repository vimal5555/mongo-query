const mongoose = require('mongoose');

const lendSchema = new mongoose.Schema({
     userAddress: {
          type: String,
     },
     tokenId: {
          type: String,
     },
     rentedAmount: {
          type: String,
     },
     expires: {
          type: String,
     },
     beneficiaryAddress: {
          type: String,
     }
});

lendSchema.index({ name: 1 });

module.exports = mongoose.model('Lend Backend', lendSchema, "lendList");