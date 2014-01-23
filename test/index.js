'use strict';
require('should');

var extractor = require('../lib/keyword-extract.js');

describe('Simple extract', function() {
	var txt1 = 'test et un autre testt';
  it('should extract testt', function(done) {
    extractor.extract('fr', txt1, function(words) {
    	words.should.eql(['testt']);
    	done();
    });
  });

	var txt2 = 'et si on recharge sarce';
  it('should extract testt', function(done) {
    extractor.extract('fr', txt2, function(words) {
    	words.should.eql(['sarce']);
    	done();
    });
  });
});