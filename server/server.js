const express = require('express');
const mongoose = require('mongoose');
const server = express();
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');
const router = express.Router();
const PostModel = require('./models/post');
const commentRoutes = require('./routes/commentRoutes')
const post = require('./routes/posts')

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(commentRoutes)
server.use(post)

mongoose.connect(keys.mongoURI, function(err, res){
    if(err){
        console.log('db connection failed', err); 
    } else {
        console.log('we have liftoff with the db');
    }
})






mongoose.connect(keys.mongoURI, function(error) {
    if (error) {
        throw error;
    }

    console.log("We are connected to the mlab database");
});


server.listen(PORT, ()=>{ console.log('server is listening to '+PORT)});