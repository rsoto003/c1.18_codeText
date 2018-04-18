const router = require('express').Router();
const passport = require('passport')

router.get('/', passport.authenticate('github'));

router.get('/error', (req,res)=>{
    res.send('there was an error')
});
      
router.get('/callback',
    passport.authenticate('github', {failureRedirect: '/error'}),
    (req,res) => {
        res.send('it worked!')
    }
);

module.exports = router

