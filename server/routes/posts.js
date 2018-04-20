const router = require('express').Router();
const PostModel = require('../models/post');

router.post('/posts/vote', (req,res) => {

    PostModel.findById(req.body.threadID, (err,data) => {
        let match=false
        let matchId;
        for (let i =0; i<data.ratedUsers.length; i++){
            if (data.ratedUsers[i].login === req.body.user.login){
                match=true
                matchId = data.ratedUsers[i]._id
            }
        }

        if(! match){
            data.ratedUsers.push({
                name:req.body.user.name,
                login: req.body.user.login,
                vote: req.body.vote
            })
            if (req.body.vote ==='up'){
                data.rating +=1
            } else {
                data.rating -= 1
            }

        } else {
           if(data.ratedUsers.id(matchId).vote==='up'){
               if(req.body.vote ==='up'){
                   data.rating -=1
                   data.ratedUsers.id(matchId).remove()
               } else {
                    data.rating -=2
                    data.ratedUsers.id(matchId).remove()
                    data.ratedUsers.push({
                        name:req.body.user.name,
                        login: req.body.user.login,
                        vote: 'down'
                    })
               }
           } else{
               if(req.body.vote!== 'up'){
                   data.rating +=1
                   data.ratedUsers.id(matchId).remove()
               } else{
                   data.rating +=2
                   data.ratedUsers.id(matchId).remove()
                   data.ratedUsers.push({
                    name:req.body.user.name,
                    login: req.body.user.login,
                    vote: 'up'
                })
               }
           }
        }
        console.log(data)
        let upCount=null;
        let downCount=null;
        for( let i =0; i<data.ratedUsers.length; i++){
            if(data.ratedUsers[i].vote==='up') upCount++
            else downCount++
        }
        data.rating = upCount - downCount

        data.save(err=>{
            // if(err)console.log('ERROR OCCURED: '+ err);
        })
        res.send(data)

    })



})

// Was /uniqueThread
router.post('/posts/unique-thread', (req, res ) => {
    PostModel.findById( req.body.threadID , (err, data) => {
        if(err) throw err;

        res.send(data);
        // console.log(data);
    
    })
})

// was /newPosts
router.post('/posts/new', (req, res, next) => {
    console.log(req.body)
    const {user ,newTitleState, newDescriptionState, JsbinState } = req.body;

    if( newTitleState.length===0 || newDescriptionState.length===0 ){
        console.log('Invalid post data!: ', req.body)
        res.send('ERROR. INVALID POST DATA')
    } else {
        const postdata = new PostModel({
            author: user.name,
            title: newTitleState,
            description: newDescriptionState,
            jsbin: JsbinState,
            comments: [],
            ratedUsers:[],
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

router.get('/posts', function(req, res, next){
    console.log('got request: field  = '+req.query.field);
    const sortMapping = {
        newest: { 'timestamp': -1},
        oldest: { timestamp: 1},    
        popular: { rating: -1},
        comments: { comments: -1 },
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

router.post('/posts/delete', (req, res) => {
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
