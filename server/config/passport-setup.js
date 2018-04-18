var passport = require ('passport');

var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

passport.use( new GoogleStrategy ({
    consumerKey: 370090551726-u7d9drqfqaok5lqsevp93trnd0e86hvp.apps.googleusercontent.com,
    consumerSecret: CFAIRYyvrtGrRs8wNcxX4oX4,
    callbackUrl: 'http://localhost:3000',
},

(token, tokenSecret, profile, done) => {
    User.findOrCreate({ googleId: profile.id}, (err, user) {
        return done(err, user)
    })
}

) )