const router = require('express').Router();
const PostModel = require('../models/post');


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/addComment', (req, res) => {
    // console.log(req)
    PostModel.findById(req.body.threadID , (err, data) => {
        if(err) throw err;
        
        console.log(data)

        data.comments.push( {
            name: 'Anonymous', 
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


router.post('/commentVote', (req,res) => {
    PostModel.findById(req.body.threadID , (err,data)=> {
        console.log(req.body)
        console.log(data)
        const target = data.comments.id(req.body.commentData._id);
        if (req.body.vote==='up'){
            target.rating +=1;
        } else {
            target.rating -=1;
        }
        data.save(err=>{
            if(err)throw err;
            console.log('Comment voting: ', req.body.vote)
        })
        res.send(data.comments.id(req.body.commentData._id));
    } )
    
    }
)

module.exports=router