const Users = require('..src/components');

module.exports = function(app){
    app.get('/', (req, res) => {
        console.log('this worked somehow lol');
    })
}

app.get('/newPost', function(req, res){
    console.log('new ')
});

app.get('/newPost', Users.descriptionInputChange);
app.get('/newPost', Users.onSubmit)
