const passport = require ('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/users')


passport.use(new GitHubStrategy({
    clientID: '8fa59b3a6a90a8734cee',
    clientSecret: '76684482693af5b5e27429390647f71f740896bb',
    callbackURL: "http://localhost:3000/auth/callback"
    },(accessToken, refreshToken, profile, done) => {
        //check if user already exists
        User.findOne({githubId:profile.id}).then( currentUser => {
            if (currentUser){
                //if user exists, pass
                done(null, currentUser)
            } else {
                new User({
                    login: profile.username,
                    githubId: profile.id,
                    avatar_url: profile.photos[0].value,
                    githubUrl: profile.profileUrl,
                    name: profile.displayName
                }).save().then( newUser=>{
                    done(null, newUser)
                })
            }
        } ).catch(err => {
            console.log('ERROR: ', err)
        })
    }
));  



passport.serializeUser( (user,done) => {
    done(null,user.id);
})


passport.deserializeUser( (id,done) => {
    User.findById(id).then(user => {
        done(null, user)
    }).catch(err =>{
        console.log(err)
    })
    // done(null,user)
});

