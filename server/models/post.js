const mongoose = require('mongoose');

const userRatingSchema = new mongoose.Schema({
    name:{type:String},
    login:{type:String}
})

const commentUserRatingSchema = new mongoose.Schema({
    name:{type:String},
    login:{type:String}
})

const commentSchema = new mongoose.Schema({
    name: {type: String},
    comment: {type: String},
    rating: {type: Number, default: 0},
    commentRatedUsers:[commentUserRatingSchema]
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

