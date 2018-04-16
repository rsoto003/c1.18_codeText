const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: {type: String},
    comment: {type: String},
    rating: {type: Number, default: 0}
})



var PostSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    jsbin: {type: String},
    timestamp: {type: Date, default: Date.now},
    comments: [commentSchema],
}, {collection: 'posts'});

module.exports = mongoose.model('PostSchema', PostSchema);

