var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: { type: String, required: true },
  picture: {type: String, required: true}
  });

module.exports = mongoose.model('Project', projectSchema);
