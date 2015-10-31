# Grunt Artycles

Grunt tasks for bulk conversion of media files, using [Artycles](http://github.com/makesites/artycles)


## Install

Install grunt-artycles next to your project's gruntfile with:
```
npm install grunt-artycles
```
This plugin requires Grunt >0.4.0

## Usage

Simply add this line to your project's Gruntfile.js gruntfile:
```
grunt.loadNpmTasks('grunt-artycles');
```
Then specify your config:
```
	grunt.initConfig({
		artycles: {
			options: {
				/** @optional  - use to override default Artycles options */
			},
			dist: {
				/** @required  - string (or array of) including grunt glob variables */
				src: ['./static/*/*.jpg', './media/*/*.mp4', './raw/*/*.png'],
				/** @optional  - if provided the converted files will be saved in this folder instead */
				dest: './assets/'
			}
		}
	});
```

## Credits

Initiated by Makis Tracend ( [@tracend](http://tracend.me) )

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)
