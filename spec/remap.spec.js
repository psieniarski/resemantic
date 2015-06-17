/* globals describe, chai, Jaskier, it */

'use strict';

// libs 
var assert = require('chai').assert;
var sinon = require('sinon');

// src code
var remap = require('../src/remap.js');

describe('eachMatch', function() {
	it('wywolanie zwrotne wyzwalane jest dla kazdego dopasowania', function() {
		var callback = sinon.spy();

		remap.eachMatch('example string example', /example/gm, callback); // should be called twice 
		assert.isTrue(callback.calledTwice);
	});


	
});

