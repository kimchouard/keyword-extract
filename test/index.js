'use strict';
require('should');

var extractor = require('../lib/keyword-extract.js');

describe('Simple extract', function() {
    var txt1 = 'test et un autre d\'test2';
  it('should extract test', function(done) {
    extractor.extract('fr', txt1, function(words) {
    	words.should.eql(['test2']);
    	done();
    });
  });

	var txt2 = 'et si on recharge sarce';
  it('should extract sarce!', function(done) {
    extractor.extract('fr', txt2, function(words) {
    	words.should.eql(['sarce']);
    	done();
    });
  });
});