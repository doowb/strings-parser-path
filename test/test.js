
/**
 * Assemble
 *
 * Assemble <http://www.assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2014 Assemble.
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect;

var Strings = require('strings');
var path = require('../');

describe('parsers', function() {

  describe('path', function() {

    var filepath = '/path/to/foo.html';
    var strings = null;

    before(function(){
      strings = new Strings();
      strings.parser('path', path());
    });

    it('should replace :basename', function() {
      var expected = 'foo';
      var actual = strings.template(':basename', 'path', {filepath: filepath});
      expect(actual).to.eql(expected);
    });

    it('should replace :filename', function() {
      var expected = 'foo.html';
      var actual = strings.template(':filename', 'path', {filepath: filepath});
      expect(actual).to.eql(expected);
    });

    it('should replace :ext', function() {
      var expected = '.html';
      var actual = strings.template(':ext', 'path', {filepath: filepath});
      expect(actual).to.eql(expected);
    });

    it('should replace dir', function() {
      var expected = '/path/to';
      var actual = strings.template(':dir', 'path', {filepath: filepath});
      expect(actual).to.eql(expected);
    });

  });

});
