/* global require, module*/
'use strict';

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

};

