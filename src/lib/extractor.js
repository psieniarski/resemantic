/* global module */
'use strict';	

function eachMatch(str, pattern, callback) {
	var match; 
	while(match = pattern.exec(str)) {
		callback(match);
	}
}

function extractSelectors(str, pattern) {
	var result = { id: {}, class: {} };

	eachMatch(str, pattern, function(match) {
		var type = match[1];
		var selectors = match[2].split(' ');		

		selectors.forEach(function(selector) {
			result[type][selector] = '';
		});
	});

	return result;
}

module.exports = {
	eachMatch: eachMatch,
	extractSelectors: extractSelectors
}