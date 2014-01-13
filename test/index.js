'use strict';
require('should');

var extractor = require('../lib/keyword.js');

var txt = 'test et un autre testt';

describe('Simple extract', function() {
  it('should extract testt', function(done) {
    extractor.extract('fr', txt, function(words) {
    	words.should.eql(['testt']);
    	done();
    });
  });
});