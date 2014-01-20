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

