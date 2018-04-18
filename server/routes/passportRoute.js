const router = require('express').Router();
const passport = require('passport')

router.get('/github', passport.authenticate('github'));

router.get('/error', (req,res)=>{
    res.send('there was an error')
});
      
router.get('/callback',
    passport.authenticate('github', {failureRedirect: '/error'}), (req,res) => {
        console.log('it worked!')
    }
);

module.exports = router

