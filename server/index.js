const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    console.log('i am listening');
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