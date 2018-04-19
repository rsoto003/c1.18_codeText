const router = require('express').Router();
const PostModel = require('../models/post');



// Was /addComment
router.post('/comment/add', (req, res) => {
    PostModel.findById(req.body.threadID , (err, data) => {
        if(err) throw err;
        
        console.log(req.body.user)

        data.comments.push( {
            name: req.body.name, 
            'comment': req.body.comment,
            'rating': 0
        });

        
        data.save(err=>{
            if(err) throw err;

            console.log('added comment')
        });

        res.send(data);
    } )
})

// /commentVote
router.post('/comment/vote', (req,res) => {
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