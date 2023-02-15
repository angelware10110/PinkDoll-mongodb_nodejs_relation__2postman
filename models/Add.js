const mongoose = require('mongoose');

const Add = mongoose.model('Add', new mongoose.Schema({
    name: String,
    description: String,
    User: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
}));

module.exports = Add;
