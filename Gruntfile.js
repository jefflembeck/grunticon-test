module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    grunticon: {
      myIcons: {
          files: [{
              expand: true,
              cwd: 'source',
              src: ['*.svg', '*.png'],
              dest: "output"
          }],
          options: {
          }
      }
    }
  });

  // grunticon task
  grunt.loadNpmTasks('grunt-grunticon');

  // Default task(s).
  grunt.registerTask('default', ['grunticon:myIcons']);

};
