const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: String,
    image: String,
    summary: String
  });

module.exports = mongoose.model('Item', itemSchema);