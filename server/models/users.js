const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: {type: String},
    id: {type: Number},
    avatar_url: {type: String},
    githubURL: {type: String},

    name: {type:String},

})

module.exports = mongoose.model('userSchema', userSchema)