/* global require, module*/
'use strict';

var fs  = require('fs');
var path = require('path');

module.exports = function(grunt) {
	
	var options = this.options({
    	pattern: /(class|id)[ \t]*=[ \t]*"([^"]+)"/gm
    });

}
