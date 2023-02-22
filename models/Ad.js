const mongoose = require('mongoose');

const Ad = mongoose.model('Ad', new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }
}));

module.exports = Ad;