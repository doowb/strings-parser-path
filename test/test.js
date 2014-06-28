/**
 * strings-parser-path <https://github.com/assemble/strings-parser-path>
 *
 * Copyright (c) 2014 Jon Schlinkert and Brian Woodward
 * Licensed under the MIT License (MIT).
 */

'use strict';

var expect = require('chai').expect;
var Strings = require('strings');
var parsePath = require('parse-filepath');
var parser = require('../');

describe('parsers', function() {
  describe('path', function() {

    var filepath = 'a/b/c.html';
    var strings = new Strings();
    strings.parser('path', parser(filepath));

    it('should replace :dirname', function() {
      var expected = 'a/b';
      var actual = strings.process(':dirname', ['path']);
      expect(actual).to.eql(expected);
    });

    it('should replace :basename', function() {
      var expected = 'c.html';
      var actual = strings.process(':basename', ['path']);
      expect(actual).to.eql(expected);
    });

    it('should replace :extname', function() {
      var expected = '.html';
      var actual = strings.process(':extname', ['path']);
      expect(actual).to.eql(expected);
    });

    it('should replace :ext', function() {
      var expected = '.html';
      var actual = strings.process(':ext', ['path']);
      expect(actual).to.eql(expected);
    });
  });
});
