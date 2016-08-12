var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: { type: String, required: true },
  price: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  category: {type: String, required: true},
  image: {type: String, required: true}
  });

module.exports = mongoose.model('Product', productSchema);
