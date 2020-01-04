let http = require('http');
let fs = require('fs');

// LAME WAY
// let server = http.createServer(function(req,res){
//     console.log('request was made: ' + req.url);
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if(req.url === '/content'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         fs.createReadStream(__dirname + '/content.html').pipe(res);
//     } else if(req.url === '/api'){
//         const returnJson = [{name:'Tom',age:20},{name:'Dick',age:18}];
//         res.writeHead(200,{'Content-Type':'application/json'});
//         res.end(JSON.stringify(returnJson));
//     } else {
//         res.writeHead(404,{'Content-Type':'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// });

// USE NPM EXPRESS NODE JS FOR FAST ROUTER PROGRAMMING
// npm install express -save
// npm uninstall express
// npm install // install package.json file and install all dependencies
// use npm install nodemon -g // auto restart nodeJS

server.listen(3000,'127.0.0.1');
console.log("Listening on port 3000");