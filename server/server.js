const express = require('express');
const mongoose = require('mongoose');
const server = express();
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');

const router = express.Router();
const PostModel = require('./models/post');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(function(req, res, next) {
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

server.post('/delete', (req, res) => {
    PostModel.findById(req.body.threadID, (err,data) => {
        if(data === null){
            console.log(`Cannot find thread ID of: ${req.body.threadID}`)
            
        }else {
            data.remove( err => {
                if (err) throw err;
    
                console.log(`Deleting post with ID of: ${req.body.threadID}`)
            } )
        }

    } )
    
})

server.post('/commentVote', (req,res) => {
    PostModel.findById(req.body.threadID , (err,data)=> {
        // console.log(data.comments.id('5ad3da924d07c10b28333070'))
        console.log(req.body)
        const target = data.comments.id(req.body.commentData._id);
        if (req.body.vote==='up'){
            target.rating +=1;
        } else {
            target.rating -=1;
        }
        data.save(err=>{
            if(err)throw err;
            console.log('voting: ', req.body.vote)
        })
        res.send(data.comments.id(req.body.commentData._id));
    } )
    
    }
)

server.post('/addComment', (req, res) => {
    PostModel.findById(req.body.threadID , (err, data) => {
        if(err) throw err;
        
        console.log(data)



        data.comments.push( {
            'name': 'Anonymous', 
            'comment': req.body.comment,
            'rating': 0
        })  

        
        data.save(err=>{
            if(err) throw err;

            console.log('added comment')
        })

        res.send(data);
    } )
})

server.post('/uniqueThread', (req, res ) => {
    PostModel.findById( req.body.threadID , (err, data) => {
        if(err) throw err;

        res.send(data);
        console.log(data);
    
    })
})



server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.post('/newPost', (req, res, next) => {

    const { newTitleState, newDescriptionState, JsbinState } = req.body;

    if( newTitleState.length===0 || newDescriptionState.length===0 ){
        console.log('Invalid post data!: ', req.body)
        res.send('ERROR. INVALID POST DATA')
    } else {
        const postdata = new PostModel({
            title: newTitleState,
            description: newDescriptionState,
            jsbin: JsbinState,
            comments: []
        })
        res.send(postdata);
        console.log('this is the postdata: ', postdata);
        postdata.save((err, post) => {
            if(err){
                return next(err)
            }
            
        })
    }


})

server.get('/', function(req, res, next){
    console.log('got request: field  = '+req.query.field);
    const sortMapping = {
        newest: { 'timestamp': -1},
        oldest: { timestamp: 1},    
        popular: { rating: -1},
        comments: { comments: -1 },
        hot: {timestamp: -1}
    }
    var sortObj;
    if(req.query.field && sortMapping[req.query.field]){
        sortObj = sortMapping[req.query.field];
    } else {
        sortObj = {};
    }
    PostModel.find().sort(sortObj).then(data=> {
        res.send({
            confirmation: true,
            results: data
        })
    }).catch(error=> {
        console.log(error);
        res.send({
            confirmation: false,
            error: error
        })
    })
})


mongoose.connect(keys.mongoURI, function(error) {
    if (error) {
        throw error;
    }

    console.log("We are connected to the mlab database");
});

/* new post schema */
/*
{
    "_id": {
        "$oid": "5acd0f13734d1d55c3198d89"
    },
    "title": "this is the title",
    "description": "this is the description",
    "file": "this is the file",
    "timeStamp": 1523387073852,
    "commentLength": 1,
    "rating": 4.5,
    "comments": [
        {
            "name": "Hannah",
            "comment": "HEEEELLLLOOOOooooOOOoooOOOO"
        }
    ]
}
*/

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

server.listen(PORT, ()=>{ console.log('server is listening to '+PORT)});



