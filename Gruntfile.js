module.exports = function(grunt) {

	// Загрузка всех плагинов
	require("load-grunt-tasks")(grunt);

	// Загрузка таймера
	require("time-grunt")(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// Lint Spaces in code
		lintspaces: {
			all: {
				src: [
					"*.html"
				],
			options: {
					newline: true,
					newlineMaximum: 4,
					trailingspaces: true,
					indentationGuess: true,
					editorconfig: ".editorconfig",
					ignores: [
						"html-comments",
						"js-comments"
					],
					showTypes: true,
					showCodes: true
				}
			}
		},

		clean: {
			build:["build"]
		},

		copy: {
			build:{
				files:[{
					expand: true,
					cwd: "src",
					src: [
						"img/**",
						"js/**",
						"index.html"
					],
					dest: "build"
				}]
			}
		},

		csscomb: {
			style: {
				expand: true,
				src: ["scss/**/*.scss"]
			}
		},

		sass: {
			style:{
				files: {
					"build/css/style.css" : ["src/scss/style.scss"]
				}
			},

			options:{
				sourcemap: "none"
			}

		},

		autoprefixer: {
			options:{
				browsers: ["last 2 versions", "ie 10"]
			},
			style: {
				src: "build/css/style.css"
			}
		},

		cmq: {
			style: {
				files: {
					"build/css/style.css" : ["build/css/style.css"]
				}
			}
		},

		cssmin: {
			style: {
				options:{
					keepSpecialComments: "none",
					report: "gzip"
				},
				files: {
					"build/css/style.min.css" : ["build/css/style.css"]
				}
			}
		},

		imagemin: {

			static: {
				options:{
					optimizationLevel: 3
				}
			},

			dynamic: {

				files: [{
					expand: true,
					src: ["build/img/**/*.{png,gif,jpg}"]
				}]

			}

		},
		svgmin: {
			options: {
					plugins: [
					{ removeViewBox: false },
					{ removeUselessStrokeAndFill: false }
					]
			},
			dist: {
					files: [{
							expand: true, cwd: "build/img/", src: ["*.svg"], dest: "build/img/"
					}]

			}
		}
	});


	grunt.registerTask("lint", ["lintspaces"]);
	grunt.registerTask("svg-sprite", ["grunticon"]);

	grunt.registerTask("default", [
		"clean",
		"copy",
		"csscomb",
		"sass",
		"autoprefixer",
		"cmq",
		"cssmin",
		"imagemin",
		"svgmin"
	]);

};
