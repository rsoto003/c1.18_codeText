const router = require('express').Router();
const passport = require('passport')

router.get('/github', passport.authenticate('github'));

router.get('/error', (req,res)=>{
    res.send('there was an error')
});

router.get('/logout', (req,res)=>{
    req.logout()

})

router.get('/callback',
    passport.authenticate('github', {failureRedirect: '/error'}), (req,res) => {
        res.redirect('/')
        console.log('it worked!')
        
    }
);

module.exports = router

