const mongoose = require('mongoose');

// Schema
const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 200
  },
  baker: {
    type: String,
    required: true,
    minLenght: 8,
    maxLenght: 200
  },
  ingrédients: {
    type: [String],
    required: true,
    enum: ['chocolate', 'flour', 'gluten free flour', 'eggs', 'milk', 'strawberry', 'vanilla', 'sugar']
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  isGlutenFree: {
    type: Boolean,
    default: false
  },
  expirationDate: {
    type: Date,
    required: false,
    default: Date
  }
})

// Model
const Cake = mongoose.model('Cake', cakeSchema);

// Export
module.exports = Cake;
