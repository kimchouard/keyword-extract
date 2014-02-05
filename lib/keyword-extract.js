'use strict';

var fs = require('fs');
var readline = require('readline');

var dico = {};


var load = function (lang, cb) {
    if (dico[lang] === undefined) {
        dico[lang] = {};
        
        var instream = fs.createReadStream(__dirname + '/../datas/'+lang+'.txt');
        var liner = readline.createInterface({
            input: instream,
            output: null,
            terminal: false
        });
        
        liner.on('line', function(line) {
            dico[lang][line] = true;
        });
        instream.once('end', function() {
            cb(dico[lang]);
        });
    } else {
        cb(dico[lang]);
    }
}

exports.extract = function(lang, doc, cb) {
    load(lang, function(dico) {
        var regex = new RegExp("('|\\(|\\)|\\[|\\]|{|}|,|;|\\!|\\?| \[0-9\] |\\n)", "g")
        doc = doc.replace(regex, ' ');
        var words = doc.split(' ');
        var final_words = [];
        for(var i = 0; i < words.length; i++) {
            var word = words[i].toLowerCase();
            if(!dico[word]) {
                final_words.push(word);
            }
        }

        cb(final_words);
    });
}

