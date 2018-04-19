const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.isAuthenticated()){
        res.redirect('/auth/github')
    } else {
        next()
    }
}

router.get('/', authCheck, (req,res)=>{
    res.send('You are logged in. Here is your stuff ' + req.user )
})

router.get('/data', (req,res)=>{
    res.send( req.user)
})

module.exports=router 