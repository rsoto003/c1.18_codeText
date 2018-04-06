const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');


mongoose.connect(keys.mongoURI);

app.get('/', (req, res) => {
    console.log('i am listening on the mf server');
    res.send({
        hello: 'this works',
        test: 'is working',
        dataNeeded: {
            userID: '2342',
            post: {
                postID: "123",
                comments: {
                    commentID: "4123",
                    comment: "this makes no sense"
                }
            }
        }
    });
})


app.listen(PORT);