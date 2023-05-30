const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
     country: {
          type: String,
     },
     city: {
          type: String,
     },
     name: {
          type: String,
     },
     location: {
          type: {
               type: String,
          },
          coordinates: {
               type: Array,
          }
     },
     students: [{
          year: {
               type: Number,
          },
          number: {
               type: Number,
          }

     }]
});

universitySchema.index({ name: 1 });

module.exports = mongoose.model('University Backend', universitySchema, "universityList");