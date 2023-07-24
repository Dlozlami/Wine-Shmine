// models/wineList.js
const mongoose = require('mongoose');

// Define the WineList schema
const wineListSchema = new mongoose.Schema({
  wine_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  volume: { type: String, required: true },
  alcohol: { type: String, required: true },
  taste: { type: String, required: true },
  priceInCent: { type: Number, required: true },
  temp: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

// Create the WineList model using the schema
const WineList = mongoose.model('WineList', wineListSchema);

module.exports = WineList;
