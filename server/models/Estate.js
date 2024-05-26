const mongoose = require('mongoose');

const estateSchema = new mongoose.Schema({
  estateName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  location: String,
  beds: Number,
  parkingSpot: Boolean,
  furnished: Boolean,
  regularPrice: Number,
  discount: Number,
  estateImage: String,
  sold: Boolean,
  rent: Boolean,
  bathrooms: Number
});

module.exports = mongoose.model('Estate', estateSchema);
