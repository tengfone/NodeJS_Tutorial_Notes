console.log('hello');


// Timer before start function
setTimeout(function(){
    console.log("3 seconds later")
},3000);


// Set interval 2 seconds each time
var time = 0;
setInterval(function(){
    time += 2;
    console.log(time + ' seocnds have passed')
},2000);

// exit when 5 seconds pass
var time2 = 0;
var timer = setInterval(function () {
    time2 += 2;
    console.log(time2 + ' seconds have passed');
    if(time > 5){
        // stop interval
        clearInterval(timer);
    }
},2000)

// directory this file is in
console.log(__dirname);

// directory + filename of this file
console.log(__filename);

