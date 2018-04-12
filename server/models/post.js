const mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    jsbin: {type: String},
    timestamp: {type: Date, default: Date.now},
    comments: {type: Array}
}, {collection: 'posts'});

module.exports = mongoose.model('PostSchema', PostSchema);

