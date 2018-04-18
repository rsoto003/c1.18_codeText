var passport = require ('passport');

var GoogleStrategy = require('passport-github').Strategy



(token, tokenSecret, profile, done) => {
    User.findOrCreate({ googleId: profile.id}, (err, user) {
        return done(err, user)
    })
}
