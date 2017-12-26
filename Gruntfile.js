var grunt = require('grunt');
grunt.loadNpmTasks('grunt-apidoc');
grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.initConfig({
	apidoc: {
    myapp: {
      src: "myapp/",
      dest: "apidoc/"
    }
  },
  watch: {
    scripts: {
      files: ['**/apidoc/*.js'],
      tasks: ['apidoc'],
      options: {
        spawn: false,
      },
    },
  },
 });
 
 grunt.registerTask('default', ['watch']); 