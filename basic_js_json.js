let http = require('http');
let fs = require('fs');

const server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj = {
        name: 'Tom',
        job: 'Computer Scientist',
        age: '18'
    };
    // .end(XXX) only takes in string / buffer
    res.end(JSON.stringify(myObj))
});

server.listen(3000,'127.0.0.1');
console.log("Listening on port 3000");

