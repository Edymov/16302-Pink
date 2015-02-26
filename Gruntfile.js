module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-lintspaces');

  grunt.registerTask('lint', ['lintspaces']);
};
