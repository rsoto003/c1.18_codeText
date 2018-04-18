const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: {type: String},
    id: {type: Number},
    avatar_url: {type: String},
    githubUrl: {type: String},
    name: {type:String},
    posts: {type: Array, default: []},
    upvoted: {type:Number, default:0} 
})

module.exports = mongoose.model('userSchema', userSchema)