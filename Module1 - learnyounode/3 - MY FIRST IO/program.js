// Write a program that uses a single synchornous filesystem operation to read a file and print the number of newlines it contains to the console.
// The full path to the file to read will be provided as the first command-line argument.

var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var bufferToString = buffer.toString().split('\n');
var result = bufferToString.length-1;

console.log(result);

/** Note: I modified the above code after official solution.
I made one line into multiple so a reader can understand what is going on.
Original passing code is below.


var fs = require('fs);
var result = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;
console.log(result);

*/