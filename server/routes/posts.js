const router = require('express').Router();
const PostModel = require('../models/post');

router.post('/postVote', (req,res) => {
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

router.post('/uniqueThread', (req, res ) => {
    PostModel.findById( req.body.threadID , (err, data) => {
        if(err) throw err;

        res.send(data);
        // console.log(data);
    
    })
})


router.post('/newPost', (req, res, next) => {

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

router.get('/', function(req, res, next){
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

router.post('/delete', (req, res) => {
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

module.exports=router