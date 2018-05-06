const router = require('express').Router();
const PostModel = require('../models/post');

const isAuth = (req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    } else {
        res.send('user is not authenticated');
    }
}

router.post('/posts/voteData', isAuth, (req,res)=>{
    let match=false;
    let vote;
    PostModel.findById(req.body.threadID, (err,data) => {
        if(err)throw err;

        for (let i =0; i<data.ratedUsers.length; i++){
            if(data.ratedUsers[i].login === req.user.login){
                match = true
                vote = data.ratedUsers[i].vote
            }
        }
        if(match){
            res.send(vote)
        }else{
            res.send(null)
        }

    })

})

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

        } else {
           if(data.ratedUsers.id(matchId).vote==='up'){
               if(req.body.vote ==='up'){
                   data.ratedUsers.id(matchId).remove()
               } else {
                    data.ratedUsers.id(matchId).remove()
                    data.ratedUsers.push({
                        name:req.body.user.name,
                        login: req.body.user.login,
                        vote: 'down'
                    })
               }
           } else{
               if(req.body.vote!== 'up'){
                   data.ratedUsers.id(matchId).remove()
               } else{
                   data.ratedUsers.id(matchId).remove()
                   data.ratedUsers.push({
                    name:req.body.user.name,
                    login: req.body.user.login,
                    vote: 'up'
                })
               }
           }
        }
        let upCount=null;
        let downCount=null;
        for( let i =0; i<data.ratedUsers.length; i++){
            if(data.ratedUsers[i].vote==='up') upCount++
            else downCount++
        }
        data.rating = upCount - downCount
        data.save(err=>{
        })
        res.send(data)

    })



})

// Was /uniqueThread
router.post('/posts/unique-thread', (req, res ) => {
    PostModel.findById( req.body.threadID , (err, data) => {
        if(err) throw err;

        res.send(data);
    
    })
})

// was /newPosts  
router.post('/posts/new', (req, res, next) => {

    const {name, newTitleState, newDescriptionState, JsbinState } = req.body;
    if( newTitleState.length===0 || newDescriptionState.length===0 ){
        res.send('ERROR. INVALID POST DATA')
    } else {
        const postdata = new PostModel({
            author: name,
            title: newTitleState,
            description: newDescriptionState,
            jsbin: JsbinState,
            comments: [],
            ratedUsers:[],
            rating: 0
        })
        res.send(postdata);
        postdata.save((err, post) => {
            if(err){
                return next(err)
            }
            
        })
    }


})



router.get('/posts', function(req, res, next){
    const sortMapping = {
        newest: { timestamp: -1},
        oldest: { timestamp: 1},    
        popular: { rating: -1}, 
        comments: { __v: -1 },
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
        res.send({
            confirmation: false,
            error: error
        })
    })
})
//sorting leaderboard
router.post('/leaderboardSort', (req, res, next) => {
    const leaderboardSorting = {
         votes: {rating: -1},
         comments: {__v: -1}
     }
     var leaderboardObj = {};
     if(req.body.query && leaderboardSorting[req.body.query]){

         leaderboardObj = leaderboardSorting[req.body.query];

     } else {
         leaderboardObj = {};
     }

     PostModel.find().sort(leaderboardSorting[req.body.query]).then(data => {
         res.send(data);
    })
})


router.post('/posts/delete', (req, res) => {
    PostModel.findById(req.body.threadID, (err,data) => {
        if(!data){
            res.send(null)
        }else {
            data.remove( err => {
                if (err) throw err;
            } )
        }

    } )
    
})


module.exports=router
