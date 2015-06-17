/* globals describe, chai, Jaskier, it */

'use strict';

// libs 
var assert = require('chai').assert;
var sinon = require('sinon');

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
	
	it('return object', function() {
		assert.isObject(result); 
	});

	it('return object contain class.foo property', function() {
		assert.deepProperty(result, 'class.foo'); 
	});

	it('return object contain id.unique property', function() {
		assert.deepProperty(result, 'id.unique'); 
	});
});

