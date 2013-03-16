'use strict';


module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                indent: 4,
                trailing: true
            },
            all: ['src/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('lint', ['jshint']);

};
