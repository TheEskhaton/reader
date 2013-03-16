'use strict';


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
    	all: ['src/**/*.js']
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);

};