const Users = require('/..src/components');

module.NewPost = function(app){
    app.get('/', (req, res) => {
        console.log('this worked somehow lol');
    })
}

app.get('/newPost', Users.titleInputChange);

app.get('/newPost', Users.descriptionInputChange);
//maybe only need onSubmit for newPost route
app.get('/newPost', Users.onSubmit)