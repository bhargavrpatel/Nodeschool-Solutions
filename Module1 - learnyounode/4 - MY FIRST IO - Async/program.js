// Write a program that uses a single asynchronous filesystem\
// Operation to read a file and print the number of newlines it\
// contains.

// Full path to the file to read will be provided as cmd-line arg.

var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
	if (!err) {
		console.log(data.toString().split('\n').length-1);
	}
});

/* Official solution 

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, contents) {
	var lines = contents.toString().split('\n').length-1;
	console.log(lines);
});


*/