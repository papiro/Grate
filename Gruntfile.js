module.exports = function (grunt)
{
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: 'Gruntfile.js'
		},
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
				files : {
					'Project_Files/css/site.css' : 'Project_Files/less/site.less'
				}
			}
		},
		autoprefixer: {
			files: {
				src: 'Project_Files/css/*.css'
			}			
		},
		watch: {
			options: {
					livereload:9090
				},
			html: {
				files: 'Project_Files/index.html'				
			},
			scripts: {
				files: ['Gruntfile.js', 'Project_Files/<%= pkg.name %>.js'],
				tasks: ['jshint']				
			},
			less: {
				files: 'Project_Files/less/*.less',
				tasks: 'less'				
			},
			css: {
				files: 'Project_Files/css/*.css',
				tasks: ['autoprefixer', 'cssmin']
			}
		}
	});

	//'jshint' loader
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//'cssmin' loader
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// LESS compiler loader
	grunt.loadNpmTasks('grunt-contrib-less');

	// 'autoprefixer' loader
	grunt.loadNpmTasks('grunt-autoprefixer');

	// 'watch' loader
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['less', 'jshint', 'autoprefixer', 'cssmin']);
};