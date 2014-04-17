var fs = require('fs');

exports.shortTest = function(arg1, arg2, callback){
	fs.readdir(arg1, arg2, function(err, list){
		list.forEach(function(file) {
			
		});
	});
	console.log("Test complete");
};

/*

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

*/