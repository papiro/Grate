module.exports = function (grunt)
{
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: 'Gruntfile.js'
		},
		cssmin: {
			options: {
				banner: '/*<%=pkg.name%>.css minified! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},			
			minify: {
				expand: true,
				cwd: 'Project_Files/css/',
				src: '*.css',
				dest: 'Project_Files/css/min.css',
				ext: '.min.css'
			}
		},
		less: {
			development: {
				files : {
					'Project_Files/css/Grate.css' : 'Project_Files/Grate.less',
					'Project_Files/css/elements.css' : 'Project_Files/elements.less'
				}
			}
		},
		autoprefixer: {
			files: {
				src: 'Project_Files/css/<%=pkg.name%>.css'
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
				files: 'Project_Files/*.less',
				tasks: 'less'				
			},
			css: {
				files: 'Project_Files/css/<%= pkg.name %>.css',
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
	grunt.registerTask('default', ['jshint', 'autoprefixer', 'cssmin', 'watch', 'less']);
};