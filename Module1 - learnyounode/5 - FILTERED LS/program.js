/*
CHALLENGE
=========
Create a program that prints a list of files in a given directory,
filtered by the extension of the files. You will be provided a directory
name as the first argument to your program and a file extention to filter
by as the second argument.

For example, if you get 'txt' as the second argument then you will 
need to filter the list to only files that end with .txt.

The list of files should be printed to the console, one file per line.
You mus tuse asynchronous I/O.
*/

var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
	if(!err) {
		for(var i = 0; i < list.length; i++) {
			var listToString = list[i].toString();
			if(listToString.indexOf(process.argv[3]) > 0) {
				console.log(listToString);
			}
		}
	}
});

/* Official Solution: Utilizing path

var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
	list.forEach(function(file) {
		if (path.extname(file) == '.'+process.argv[3])
			console.log(file);
	});
});

*/
