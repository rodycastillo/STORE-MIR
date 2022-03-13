const mongoose  = require('mongoose');

const uploadImage = new mongoose.Schema({
    img: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model('Images', uploadImage);
