let fs = require('fs');

// Delete a file called writeMe.txt
fs.unlinkSync('writeMe.txt');

// Synchronous method to create a directory
fs.mkdirSync('TestFolder');

// Synchronous method to remove directory
fs.rmdirSync('TestFolder');

// Asynchronous method to create directory, read file and write to new directory
fs.mkdir('TestFolder',function(){
   fs.readFile('toRead.txt','utf8',function(err,data){
       console.log(data);
       fs.writeFile('./TestFolder/writeMe.txt',data,(err)=>{});
   }) ;
});

// Delete File in directory
fs.unlinkSync('./TestFolder/writeMe.txt');

// Remove Directory
fs.rmdir('TestFolder',()=>{});