/**
 * strings-parser-path <https://github.com/assemble/strings-parser-path>
 *
 * Copyright (c) 2014 Jon Schlinkert and Brian Woodward
 * Licensed under the MIT License (MIT).
 */

'use strict';

var path = require('path');
var parsePath = require('parse-filepath');

module.exports = function pathParser(filepath) {
  var context = parsePath(filepath);
  context.ext = context.extname || '';

  return [
    {
      pattern: /:dirname/,
      replacement: function() {
        return this.dirname || context.dirname;
      }
    },
    {
      pattern: /:basename/,
      replacement: function() {
        return this.basename || context.basename;
      }
    },
    {
      pattern: /:extname/,
      replacement: function() {
        return this.extname || context.extname;
      }
    },
    {
      pattern: /:ext/,
      replacement: function() {
        return this.ext || context.ext;
      }
    }
  ];
};