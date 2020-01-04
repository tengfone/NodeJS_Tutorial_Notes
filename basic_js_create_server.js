var http = require('http');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World!');
});


// Listening on port 3000 ip 127.0.0.1 To view launch browser and type 127.0.0.1:3000
server.listen(3000,'127.0.0.1');
console.log('Listening on port 3000');

