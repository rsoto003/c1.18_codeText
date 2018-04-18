const router = require('express').Router();

const authCheck = (req, res, next) => {
    console.log("This is the request object", req.session);
    console.log("This is the session stored user", req.user);
    console.log("Result from req.isAuthenticated", req.isAuthenticated());

    if(!req.isAuthenticated()){
        res.redirect('/auth/github')
    } else {
        next()
    }
}

router.get('/', authCheck, (req,res)=>{
    // console.log('helllooooooooooooooooo')
    console.log(req.user)
    res.send('You are logged in. Here is your stuff ' + req.user )
})

module.exports=router