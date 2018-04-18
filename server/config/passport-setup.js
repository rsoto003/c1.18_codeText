const passport = require ('passport');

const GitHubStrategy = require('passport-github').Strategy;
 
passport.use(new GitHubStrategy({
    clientID: 'a92e4125b337edb86197',
    clientSecret: '592abb03ff862e09c389c59109769ed2850bb46a',
    callbackURL: "http://localhost:5000/auth/callback"
  },
  (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate({ githubId: profile.id }, (err, user) => {
            return cb(err, user);
        });
    }
));  


passport.serializeUser( (user,done) => {
    done(null,user);
})


passport.deserializeUser( (user,done) => {
    done(null,user)
});

