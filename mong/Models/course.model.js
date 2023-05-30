const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
     university: {
          type: String,
     },
     name: {
          type: String,
     },
     level: {
          type: String,
     }
})

courseSchema.index({ name: 1 });

module.exports = mongoose.model('Course Model', courseSchema, 'courseList');