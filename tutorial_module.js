var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
    // use template strings ` `, no need use concat
    return `The sum of the 2 numbers is ${a+b}`;
}

var pi = 3.142;


// to be made available outside of the module (public static void)
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
