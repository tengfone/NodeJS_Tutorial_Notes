let express = require('express');
let app = express();
var bodyParser = require('body-parser')

// ejs set view engine
app.set('view engine','ejs');
// applying css static files
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
    res.render('index');
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
    // let data is considered middle ware codes
    let data = {age:20,job:'God',hobby:['eating','sleeping','playing']};
    res.render('profile',{person:req.params.name, data:data});
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });
// getting query data and displaying
app.get('/contact',function(req,res){
    res.render('contact',{qs:req.query});
});

// parser
app.post('/contact',urlencodedParser,function(req,res){
    res.render('contact-success',{data:req.body});
});

app.listen(3000);

// install ejs as a template engine