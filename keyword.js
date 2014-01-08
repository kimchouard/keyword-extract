var dico = [];

exports.init = function (callback) {
    var fs = require('fs');
    var readline = require('readline');
    
    var instream = fs.createReadStream('./dico_fr.txt');
    var liner = readline.createInterface({
        input: instream,
        output: null,
        terminal: false
    });
    
    liner.on('line', function(line) {
        dico[line] = true;
    });
    instream.once('end', function() {
        callback();
    });
}

exports.extract = function(doc) {
    var words = doc.split(" ");
    var final_words = [];
    for(var i = 0; i < words.length; i++) {
        if(!dico[words[i]]) {
            final_words.push(words[i]);
        }
    }
    return final_words;
}