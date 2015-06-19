/*
 * resemantic
 * https://github.com/psieniarski/resemantic
 *
 * Copyright (c) 2015 Pawel Sieniarski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var _ = require('underscore');

  var extractSelectors = require('../lib/extractor').extractSelectors;

  grunt.registerMultiTask('resemantic', 'Refactoring HTML, CSS, JS', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var result = {}; 
    var dest = this.files[0].dest; 

    var options = this.options({
      pattern: /(class|id)[ \t]*=[ \t]*"([^"]+)"/gm,
      indent: 4
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      });

      result = _.extend(extractSelectors(src, options.pattern));
    });

    grunt.file.write(dest, JSON.stringify(result, null, options.indent));
    
  });

};
