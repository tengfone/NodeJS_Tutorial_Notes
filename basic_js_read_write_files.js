const fs = require('fs');

// Synchronous file. AKA read all first in file then move to next line. READ THE TXT FILE
// const readed = fs.readFileSync('toRead.txt', 'utf8');

// Write to a file
// fs.writeFileSync('writeMe.txt',readed);

// Asynchronous method. can move to second line even when running
fs.readFile('toRead.txt','utf8',function(err,data){
    console.log(data);

    // write file
    fs.writeFile('writeMe.txt',data,(err)=>{});
});

console.log('This will comes before fs.readFile asynchronous method even if the code is the 2nd line');

