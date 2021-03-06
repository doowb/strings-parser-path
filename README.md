# strings-parser-path [![NPM version](https://badge.fury.io/js/strings-parser-path.png)](http://badge.fury.io/js/strings-parser-path)

> Parser for strings to handle file path parsing.

## Install
Install with [npm](npmjs.org):

```bash
npm i strings-parser-path --save-dev
```

## Usage
Use `path` as a [Strings](https://github.com/assemble/strings) parser:

```js
var Strings = require('strings');
var strings = new Strings({
  dirname: 'a/b/c',
  basename: 'file',
  ext: '.html'
});

strings.parser('path', require('strings-parser-path'));
var propstring = ':dirname/:basename:ext';

console.log(strings.template(propstring, 'path'));
//=> 'a/b/c/index.html'
```

## Author
 
**Brian Woodward**
 
+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb) 
 
**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 


## License
Copyright (c) 2014 Brian Woodward, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 28, 2014._
