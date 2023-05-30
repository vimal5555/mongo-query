const mongoose = require('mongoose');

const backSchema = new mongoose.Schema({
     index: { type: Number },
     name: { type: String, default: null },
     isActive: { type: Boolean, },
     registered: { type: Date, default: Date.now, },
     age: { type: Number, default: 0 },
     gender: { type: String, },
     eyeColor: { type: String, },
     favouriteFruit: { type: String, },
     company: {
          title: { type: String, },
          email: { type: String, },
          phone: { type: String, },
          location: {
               country: { type: String, },
               address: { type: String, }
          }
     },
     tags: { type: Array, }
});

backSchema.index({ name: 1 });

module.exports = mongoose.model('Backend', backSchema, "dataList");