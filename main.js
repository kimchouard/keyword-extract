var extractor = require('./keyword.js');

var txt = 'test et un autre testt';
extractor.init(function () {
    var words = extractor.extract(txt);
    console.log(words);    
});
