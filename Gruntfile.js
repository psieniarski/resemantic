/*
 * resemantic
 * https://github.com/psieniarski/resemantic
 *
 * Copyright (c) 2015 Pawel Sieniarski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    resemantic: {
      html: {
        src: 'files/*.html',
        dest: 'tmp/selectors.json'
      }
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['resemantic']);

};
