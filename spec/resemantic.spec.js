/* globals describe, chai, Jaskier, it */

'use strict';

// libs 
var path   = require('path'); 
var fs     = require('fs');
var assert = require('chai').assert;
var sinon  = require('sinon');

// src code
var resemantic = require('../src/resemantic.js');

// helpers
var testString  = '<div class="foo bar"></div><div id="unique"></div>';
var testPattern = /(class|id)[ \t]*=[ \t]*"([^"]+)"/gm;  

// tests
describe('eachMatch', function() {
	it('callback should be involved for each match', function() {
		var callback = sinon.spy();

		resemantic.eachMatch(testString, testPattern, callback); // should be called twice 
		assert.isTrue(callback.calledTwice);
	});
});

describe('extractSelectors', function() {
	var result; 

	beforeEach(function() {
		result = resemantic.extractSelectors(testString, testPattern);
	});

	afterEach(function() {
		result = undefined;
	})
	
	it('should return object', function() {
		assert.isObject(result); 
	});

	it('should return object contain class.foo property', function() {
		assert.deepProperty(result, 'class.foo'); 
	});

	it('should return object contain id.unique property', function() {
		assert.deepProperty(result, 'id.unique'); 
	});
});

describe('createConfigFile', function() {
	var file = path.resolve('test.txt'); 

	after(function() {
		fs.unlinkSync(file);
	});

	it('should create file', function() {
		var obj = { foo: 5, bar: 'str' };

		resemantic.createConfigFile(file, obj);

		fs.exists(file, function (exists) {
  			assert.isTrue(exists);
		});
	});
});
