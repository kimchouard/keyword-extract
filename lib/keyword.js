'use strict';
var fs = require('fs');

var dico = [];

var load = function (lang, cb) {
    if (dico.length === 0) {
        var readline = require('readline');
        
        var instream = fs.createReadStream(__dirname + '/../datas/dico_fr.txt');
        var liner = readline.createInterface({
            input: instream,
            output: null,
            terminal: false
        });
        
        liner.on('line', function(line) {
            dico[line] = true;
        });
        instream.once('end', function() {
            cb();
        });
    } else {
        cb();
    }
}

exports.extract = function(lang, doc, cb) {
    load(lang, function() {
        var words = doc.split(" ");
        var final_words = [];
        for(var i = 0; i < words.length; i++) {
            if(!dico[words[i]]) {
                final_words.push(words[i]);
            }
        }

        cb(final_words);
    });
}

