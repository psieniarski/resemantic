var fs  = require('fs');
var src = './files/';

var CONFIG = {
	classID: /(class|id)[ \t]*=[ \t]*"([^"]+)"/gm
};

var pattern = CONFIG.classID;

function eachMatch(str, pattern, callback) {
	var match; 
	while(match = pattern.exec(str)) {
		callback(match);
	}
}

function extractSelectors(str, pattern) {
	var result = { ids: {}, classes: {} };

	eachMatch(str, pattern, function(match) {
		var type = match[1];
		var selectors = match[2].split(' ');
		
		if(type == 'class') {
			selectors.forEach(function(selector) {
				result.classes[selector] = '';
			});

		} else if(type == 'id') {
			selectors.forEach(function(selector) {
				result.ids[selector] = '';
			});
		}
	});

	return result;
}

module.exports = {
	eachMatch: eachMatch,
	extractSelectors: extractSelectors

}

