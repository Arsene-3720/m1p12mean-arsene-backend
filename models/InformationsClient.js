const mongoose = require('mongoose');

const InformationsClientSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    adresse_postale: { type: String, default: '' },
    preferences_communication: { type: String, default: '' },
    comment_connu_atelier: { type: String, default: '' },
});

module.exports = mongoose.model('InformationsClient', InformationsClientSchema);
