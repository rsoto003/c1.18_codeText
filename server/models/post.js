const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {type: String},
    comment: {type: String},
    rating: {type: Number, default: 0}
})

const userRatingSchema = new mongoose.Schema({
    name:{type:String}
})

var PostSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    jsbin: {type: String},
    rating: {type: Number, default: 0},
    ratedUsers:[userRatingSchema],
    timestamp: {type: Date, default: Date.now},
    comments: [commentSchema],
}, {collection: 'posts'});

module.exports = mongoose.model('PostSchema', PostSchema);

