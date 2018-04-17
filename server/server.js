const express = require('express');
const mongoose = require('mongoose');
const server = express();
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');
const router = express.Router();
const PostModel = require('./models/post');
const commentRoutes = require('./routes/commentRoutes')


server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(commentRoutes)

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

mongoose.connect(keys.mongoURI, function(err, res){
    if(err){
        console.log('db connection failed', err); 
    } else {
        console.log('we have liftoff with the db');
    }
})

server.post('/delete', (req, res) => {
    PostModel.findById(req.body.threadID, (err,data) => {
        if(!data){
            console.log(`Cannot find thread ID of: ${req.body.threadID}`)
            res.send(null)
        }else {
            data.remove( err => {
                if (err) throw err;
    
                console.log(`Deleting post with ID of: ${req.body.threadID}`)
            } )
        }

    } )
    
})

server.post('/postVote', (req,res) => {
    console.log(req.body)

    PostModel.findById(req.body.threadID, (err,data) => {
        console.log(data)

        if (req.body.vote ==='up'){
            data.rating +=1
        } else {
            data.rating -= 1
        }
        data.save(err=>{
            if(err)throw err;
            console.log('Post voting: ', req.body.vote)
        })
        res.send(data)
    })
})

// server.post('/commentVote', (req,res) => {
//     PostModel.findById(req.body.threadID , (err,data)=> {
//         console.log(req.body)
//         console.log(data)
//         const target = data.comments.id(req.body.commentData._id);
//         if (req.body.vote==='up'){
//             target.rating +=1;
//         } else {
//             target.rating -=1;
//         }
//         data.save(err=>{
//             if(err)throw err;
//             console.log('Comment voting: ', req.body.vote)
//         })
//         res.send(data.comments.id(req.body.commentData._id));
//     } )
    
//     }
// )

// server.post('/addComment', (req, res) => {
//     PostModel.findById(req.body.threadID , (err, data) => {
//         if(err) throw err;
        
//         console.log(data)



//         data.comments.push( {
//             name: 'Anonymous', 
//             'comment': req.body.comment,
//             'rating': 0
//         })  

        
//         data.save(err=>{
//             if(err) throw err;

//             console.log('added comment')
//         })

//         res.send(data);
//     } )
// })

server.post('/uniqueThread', (req, res ) => {
    PostModel.findById( req.body.threadID , (err, data) => {
        if(err) throw err;

        res.send(data);
        // console.log(data);
    
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
            comments: [],
            rating: 0
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


server.listen(PORT, ()=>{ console.log('server is listening to '+PORT)});



