const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');

const router = express.Router();
const PostModel = require('./models/post');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// let dbUrl = 'mongodb://localhost/addPost';
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

mongoose.connect(keys.mongoURI, function(err, res){
    if(err){
        console.log('db connection failed', err); 
    } else {
        console.log('we have liftoff with the db', res);
    }
})


app.get('/', function(req, res, next){
    console.log('got request');
    PostModel.find().then(data=> {
        res.json({
            confirmation: true,
            results: data
        })
    }).catch(error=> {
        console.log(error);
        res.json({
            confirmation: false,
            error: error
        })
    })
})

module.exports = router;

// testing routing
// app.get('/hello', (req, res) => {
//     res.send('<h1>hello there</h1>');
//     console.log('listening on hello, lol');
// })

mongoose.connect(keys.mongoURI, function(error) {
    if (error) {
        throw error;
    }

    console.log("We are connected to the mlab database");
});

var InstructorSchema = {
    name: String,
    age: Number
}




// AT A BASE LEVEL CREATING / INSERTING data into our collections for mongo
// var ryan = new Instructor({ name: 'Ryan', age: 24 });
// ryan.save();

// READING FROM OUR COLLECTIONS
// Instructor.find(function(err, instructors) {
//     if (err) return console.error(err);

//     console.log("These are all of our instructors", instructors);
// })
// let TestUserSchema = {
//     userName: String,
//     email: String,
//     comment: String
// }
// let TestUser = mongoose.model('TestUser', TestUserSchema);

// let testWill = new TestUser({userName: 'testWill', email: 'testWIll@gmail.com', comment: 'hello everyoasdafasdfadsfa' });
// // testWill.save();

// TestUser.find(function(err, TestUser){
//     if(err) return console.error(err);

//     console.log('these are all of the test users', TestUser);
// });

app.listen(PORT, ()=>{ console.log('server is listening to '+PORT)});



