module.exports = function(grunt){
	//Do grunt-related things in here	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		compass: {                  // Task 
			dist: {                   // Target 
				options: {              // Target options 
					sassDir: 'app/scss',
					cssDir: 'app/css',
					environment: 'production'
				}
			},
			dev: {                    // Another target 
				options: {
					sassDir: 'app/scss',
					cssDir: 'app/css'
				}
			}
		}
	});
	
	//plugins loading
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
};