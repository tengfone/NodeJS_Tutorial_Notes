let http = require('http');
let fs = require('fs');

const server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    let myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log("Listening on port 3000");