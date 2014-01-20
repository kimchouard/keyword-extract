keyword-extract
===============

A NodeJS librairy which extract relevant keywords from a string.

A word is treated as relevant when it 

# Installation

You first need to import the librairy:

```javascript
var extractor = require('../lib/keyword.js');
```

# Usage

Here is the main functions available.

## extract

```javascript
extractor.extract(lang, text, callback);
```

- `lang`: the lang accronym of the text (see [available languages](#languages) )
- `text`: the text from which the keywords should be extracted
- `callback`: the callback function with the array of keywords as parameter.

```javascript
// Concrete example
extractor.extract('en', 'I like goat from Paris.', function(words) {
	// Use words, the keyword array as you like here
	// It should be equal to ['Paris'] here.
});
```

## languages

From now, the available languages are:
- fr