module.exports = function(grunt){
	//do grunt-related things in here	
	//project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//uglify plugin setup
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		//compass-sass pre-processor setup
		compass: {                  // Task 
			dist: {                   // Target 
				options: {              // Target options 
					sassDir: 'app/scss/general',
					cssDir: 'app/css',
					environment: 'production'
				}
			},
			dev: {                    // Another target 
				options: {
					sassDir: 'app/scss/general',
					cssDir: 'app/css'
				}
			}
		},
		//node-webkit-builder
		nodewebkit: {
			options: {
				platforms: ['win'],
				buildDir: './builds',
				version: 'v0.12.0'
			},
			src: ['./app/**/*']
    	}
	});
	
	//plugins loading
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-node-webkit-builder');
};