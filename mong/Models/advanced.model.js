const mongoose = require('mongoose');

const advancedSchema = new mongoose.Schema({
     name: { type: String, },
     price: { type: Number, },
     category: { type: Array, },
     tags: { type: Array, },
     inventory: { type: Array, },
     reviews: [{
          author: { type: String, },
          ratings: { type: String, },
          text: { type: String, },
     }]
})

advancedSchema.index({ price: 1 });

module.exports = mongoose.model('Advanced Backend', advancedSchema, "advancedDataList");