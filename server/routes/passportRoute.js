const router = require('express').Router();
const passport = require('passport')

router.get('/check', (req, res)=> {
    let authenticated = null;
    if (req.isAuthenticated()) {
        authenticated = true;

    } else {
        authenticated = false;
    }
    res.send({authenticated});
});


router.get('/github', passport.authenticate('github'));

router.get('/error', (req,res)=>{
    res.send('there was an error')
});

router.get('/logout', (req,res)=>{
    console.log('logging out')
    req.logout()
    req.session.destroy( () => {
        res.redirect('/');  
    } )
});


router.get('/callback',passport.authenticate('github') , (req,res) => {
        // res.send(req.user)
        console.log('it worked!**********')
        res.redirect('/')
    }
);



module.exports = router

