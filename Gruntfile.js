var src = 'Project_Files/less/Grate/',
	dest = 'Project_Files/css/src/';

module.exports = function (grunt)
{
	grunt.initConfig({
		cssmin: {
			minify: {
				expand: true,
				cwd: 'Project_Files/css/',
				src: 'Grate.css',
				dest: 'Project_Files/css/min/',
				ext: '.min.css'
			}
		},
		less: {
			development: {
				files : [
					{ src : src + 'Grate.less', dest : dest + 'Grate.css' }
					//{ src : src + 'animations.less', dest : dest + 'animations.css' },
					//{ src : src + 'list-styles.less', dest : dest + 'list-styles.css' }
				]
			}
		},
		autoprefixer: {
			files: {
				src: 'Project_Files/css/*.css'
			}			
		},
		watch: {
			html: {
				files: 'Project_Files/index.html'				
			},
			scripts: {
				files: ['Gruntfile.js', 'Project_Files/<%= pkg.name %>.js'],
				tasks: ['jshint']				
			},
			less: {
				files: ['Project_Files/less/site.less', 'Project_Files/less/Grate/*.less'],
				tasks: 'less'				
			},
			css: {
				files: 'Project_Files/css/*.css',
				tasks: ['autoprefixer', 'cssmin']
			}
		}
	});

	//'cssmin' loader
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// LESS compiler loader
	grunt.loadNpmTasks('grunt-contrib-less');

	// 'autoprefixer' loader
	grunt.loadNpmTasks('grunt-autoprefixer');

	// 'watch' loader
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['less', 'autoprefixer']);
};
