
module.exports = function(grunt) {

	// Internal lib.
	//var Artycles = require('./lib/artycles').init(grunt),
	var Artycles = require('artycles'),
		async = grunt.util.async;

	grunt.registerMultiTask('artycles', 'Convert files with Artycles.', function() {

		// Merge task-specific and/or target-specific options with these defaults.
		if( !this.files.length ) return grunt.fail.warn("No source locations entered");
		// merge options with defaults
		var options = this.options({});
		var done = this.async();

		var artycles = new Artycles(options);

		// Iterate over all src-dest file pairs.
		//this.files.forEach(function(f) {
		async.forEach(this.files, function(f, cb) {

			var src = f.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			});

			// exit now if we have no src files
			if( !src.length ){
				var err = "No files were found in "+ f.orig.src;
				grunt.fail.warn(err);
				return done(err);
			}
			// #4 see if there's a dest dir
			var dest = (typeof f.dest != "undefined") ? f.dest : false;

			// loop through each src
			for(var i in src){
				var format = artycles.format(src[i]);
				// exit now if no valif format
				if( !format ) return false;
				// set path
				var path;
				var name = src[i].substring(src[i].lastIndexOf('/')+1, src[i].lastIndexOf('.'));
				var dir = src[i].substr( 0, src[i].lastIndexOf("/") );
				if( dest ){
					path = dest;
				} else if( dir != ""){
					path = dir +"/";
				} else {
					//dir
					path = process.cwd() +"/";
				}
				artycles.set({ path: path, name: name });
				// Convert files, warn and fail on error.
				try {
					artycles[format](src[i],function(err){
						grunt.log.writeln('Source "' + f.orig.src + '" parsed.');
						if (options.report) {
							contrib.minMaxInfo(result.min, result.max, options.report);
						}
						cb();
					});
				} catch (e) {
					var err = new Error('Artycles failed.');
					if (e.msg) {
						err.message += ', ' + e.msg + '.';
					}
					err.origError = e;
					grunt.fail.warn(err);
				}

			}

		}, function(error) {
			//console.log("DONE!!!");
			done(!error);
			return true;
		});

	});

};
