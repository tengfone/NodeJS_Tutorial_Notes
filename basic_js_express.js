let express = require('express');
let app = express();

// ejs set view engine
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/content',function(req,res){
    res.sendFile(__dirname + '/content.html');
});

// getting request parameters
// app.get('/profile/:id',function(req,res){
//     res.send('You requested to see the profile with the id of ' + req.params.id);
// });

// using EJS
app.get('/profile/:name',function(req,res){
    let data = {age:20,job:'God',hobby:['eating','sleeping','playing']};
    res.render('profile',{person:req.params.name, data:data});
});

app.listen(3000);

// install ejs as a template engine