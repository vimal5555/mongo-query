const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
     DOB: { type: String, },
     age: { type: Number, default: 0 },
     timeStamp: { type: Number },
     UTCTime: { type: String },
     createdA: { type: Date, },
})

trainSchema.index({ age: 1 });

module.exports = mongoose.model('Training Backend', trainSchema, "trainDataList");