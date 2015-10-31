module.exports = function(grunt) {

	grunt.loadTasks( require('path').normalize(__dirname +'/../../tasks') );

	// configuration.
	grunt.initConfig({
		artycles: {
			options: {
			},
			 dist: {
				 src: ['earth-from-iss.png'],
			 }
		}

	});

	grunt.registerTask('default', ['artycles']);

}
