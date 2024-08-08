const mongoose = require('mongoose');

const UsedEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const correosUsados = mongoose.model('carbonUsersEmailUsed', UsedEmailSchema);

module.exports = correosUsados;
