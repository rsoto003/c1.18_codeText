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