var fs  = require('fs');
var src = './files/';

var CONFIG = {
	classID: /(class|id)[ \t]*=[ \t]*"([^"]+)"/gm
};

var pattern = CONFIG.classID;

function eachMatch(str, pattern, callback) {
	var match; 
	while(match = pattern.exec(str)) {
		callback(match)
	}
}

module.exports = {
	eachMatch: eachMatch
}

