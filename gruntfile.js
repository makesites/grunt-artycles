/*
 * grunt-artycles
 * Source: http://github.com/makesites/grunt-artycles
 *
 * Created by [Makis Tracend]( [@tracend](http://github.com/tracend) )
 *
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//gruntfile : path.normalize( __dirname+'/../gruntfile.js'),
		// Before generating any new files, remove any previously-created files.
		//clean: {
		//	tests: ['tmp']
		//},

		// Configuration to be run
		artycles: {
			options: {
			},
			 dist: {
				 src: ['./assets/*.jpg', './assets/*.png', './assets/*.mp4'],
				/** @optional  - if provided the converted files will be saved in this folder instead */
				//dest: './assets/'
			 }
		}

	});

	// Load this plugin's tasks
	//grunt.loadTasks('tasks');

	// By default clean the "tmp" dir, then run this plugin's tasks
	//grunt.registerTask('default', ['clean', 'artycles']);
	grunt.registerTask('default', ['artycles']);

}
