const router = require('express').Router();


router.get('/', (req,res)=>{
    res.send('Here is your stuff: ' , req.user.username)
})