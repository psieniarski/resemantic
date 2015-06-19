/* global module */
'use strict';	

var extractor = {}; 

extractor.eachMatch = function(str, pattern, callback) {
	var match; 
	while(match = pattern.exec(str)) {
		callback(match);
	}
};

extractor.extractSelectors = function(str, pattern) {
	var result = { id: {}, class: {} };

	extractor.eachMatch(str, pattern, function(match) {
		var type = match[1];
		var selectors = match[2];

		if (type == 'class') {
			selectors = selectors.split(' ');
			selectors.forEach(function(selector) {
				result.class[selector] = '';
			});		
		} else {
			result.id[selectors] = '';
		}
	});

	return result;
};

module.exports = extractor; 
