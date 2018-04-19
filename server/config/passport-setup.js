const passport = require ('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/users')


passport.use(new GitHubStrategy({
    clientID: 'a92e4125b337edb86197',
    clientSecret: '592abb03ff862e09c389c59109769ed2850bb46a',
    callbackURL: "http://localhost:5000/auth/callback"
    },(accessToken, refreshToken, profile, done) => {
        console.log(profile)
        //check if user already exists
        User.findOne({githubId:profile.id}).then( currentUser => {
            if (currentUser){
                //if user exists, pass
                console.log('user exists: ', currentUser)
                done(null, currentUser)
            } else {
                console.log("CREATING A NEW USER ************")
                new User({
                    login: profile.username,
                    githubId: profile.id,
                    avatar_url: profile.photos[0].value,
                    githubUrl: profile.profileUrl,
                    name: profile.displayName
                }).save().then( newUser=>{
                    console.log('user created: ', newUser)
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

