# Install apidoc global
- npm install apidoc -g
# Install grunt global
- npm install grunt -g
# Create Directory:
- myapp/apidoc
- template
all js api doc files locate in apidoc
# install grunt local then grunt-apidoc to generate static file
- npm install grunt --save-dev
- npm install grunt-apidoc --save-dev
- create File Gruntfile.js width content:
```
var grunt = require('grunt');
grunt.loadNpmTasks('grunt-apidoc');
 grunt.initConfig({
	apidoc: {
    myapp: {
      src: "myapp/",
      dest: "apidoc/"
    }
  } 
 });
 
 grunt.registerTask('default', ['apidoc']); 
```
- run grunt
##note: install apidoc plugin snippet to generate js api doc <apidocument ctrl space>