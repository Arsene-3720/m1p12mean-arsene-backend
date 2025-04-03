const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  details: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Detail' }],
  image: { type: String, default: null }
});

module.exports = mongoose.model('Service', ServiceSchema);
