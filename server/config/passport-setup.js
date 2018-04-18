const passport = require ('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/users')


passport.use(new GitHubStrategy({
    clientID: 'a92e4125b337edb86197',
    clientSecret: '592abb03ff862e09c389c59109769ed2850bb46a',
    callbackURL: "http://localhost:5000/auth/callback"
    },(accessToken, refreshToken, profile, done) => {
        console.log(profile)
        new User({
            login: profile.login,
            id: profile.id,
            avatar_url: profile.avatar_id,
            githubUrl: profile.avatar.html_url,
            name: profile.name
        }).save().then( (newUser)=>{
            conosle.log('user created: ', newUser)
        })
    }
));  


// passport.serializeUser( (user,done) => {
//     done(null,user);
// })


// passport.deserializeUser( (user,done) => {
//     done(null,user)
// });

