'use strict';

(function() {
    //Declaring variables  
    var fs, lang, text, extractor;

    //Requiring files
    fs = require('fs');
    extractor = require(__dirname+'/keyword.js');

    if (process.argv.length === 4) {
      lang = process.argv[2];
      text = process.argv[3];
      console.log(process.argv);
      if (lang !== '' && text !== '') {
        extractor.extract(lang, text, function(words) {
          console.log(words);
        });
      } else {
        console.log("Please give some valid arguments.")
      }
    }
}).call(this)