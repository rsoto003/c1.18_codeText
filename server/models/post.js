const mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    file: {type: String},
    timestamp: {type: Date, default: Date.now}
}, {collection: 'posts'});

module.exports = mongoose.model('PostSchema', PostSchema);