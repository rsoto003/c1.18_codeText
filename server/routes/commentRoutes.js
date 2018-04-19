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
            'rating': 0,
            commentRatedUsers: []
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
        // console.log(data)
        // console.log(req.body)



        const target = data.comments.id(req.body.commentData._id);

        let match = false;
        let matchId;
        // console.log(target);
        for (let i =0; i<target.commentRatedUsers.length; i++){
            console.log(target.commentRatedUsers[i].login + 'COMPARED AGAINST' + req.body.user.login)
            if (target.commentRatedUsers[i].login === req.body.user.login){
                match=true
                matchId = target.commentRatedUsers[i]._id
            }
        }

        if(!match){
            console.log("ADDING USER TO THE DOCUMENT, : "+ req.body.user.name)
            target.commentRatedUsers.push({
                name: req.body.user.name,
                login: req.body.user.login
            })
            if (req.body.vote==='up'){
                target.rating +=1;
            } else {
                target.rating -=1;
            }  
        } else {
            console.log("EXISTING USER ALREADY IN DOCUMENT")
            // console.log('THIS IS DATA: '+ target.commentRatedUsers.id(req.body.user._id))
            target.commentRatedUsers.id(matchId).remove()
            if (req.body.vote ==='up'){
                target.rating -=1
            } else {
                target.rating += 1
            }
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