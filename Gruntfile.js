'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		libraryName: 'ui5lab.geometry',

		dir: {
			src: 'src',
			test: 'test',
			dist: 'dist',
			ui5libs: 'node_modules/@openui5',
			ui5lab_browser: 'node_modules/ui5lab-browser/dist'
		},

		connect: {
			options: {
				port: 8080,
				hostname: '*'
			},
			src: {},
			dist: {}
		},

		openui5_connect: {
			src: {
				options: {
					resources: [
						'<%= dir.ui5libs %>/sap.ui.core/src',
						'<%= dir.ui5libs %>/sap.m/src',
						'<%= dir.ui5libs %>/sap.f/src',
						'<%= dir.ui5libs %>/sap.ui.layout/src',
						'<%= dir.ui5libs %>/themelib_sap_belize/src',
						'<%= dir.src %>'
					],
					testresources: [
						'<%= dir.ui5libs %>/sap.ui.core/test',
						'<%= dir.ui5libs %>/sap.m/test',
						// TODO: how to get rid of these indirect dependencies only needed for the browser (f + layout)
						'<%= dir.ui5libs %>/sap.f/test',
						'<%= dir.ui5libs %>/sap.ui.layout/test',
						'<%= dir.ui5libs %>/themelib_sap_belize/test',
						'<%= dir.test %>',
						'<%= dir.ui5lab_browser %>/test-resources'
					]
				}
			},
			dist: {
				options: {
					resources: [
						'<%= dir.ui5libs %>/sap.ui.core/src',
						'<%= dir.ui5libs %>/sap.m/src',
						'<%= dir.ui5libs %>/sap.f/src',
						'<%= dir.ui5libs %>/sap.ui.layout/src',
						'<%= dir.ui5libs %>/themelib_sap_belize/src',
						'<%= dir.dist %>/resources'
					],
					testresources: [
						'<%= dir.ui5libs %>/sap.ui.core/test',
						'<%= dir.ui5libs %>/sap.m/test',
						'<%= dir.ui5libs %>/sap.f/test',
						'<%= dir.ui5libs %>/sap.ui.layout/test',
						'<%= dir.ui5libs %>/themelib_sap_belize/test',
						'<%= dir.dist %>/test-resources',
						'<%= dir.ui5lab_browser %>/test-resources'
					]
				}
			}
		},

		openui5_theme: {
			theme: {
				files: [
					{
						expand: true,
						cwd: '<%= dir.src %>',
						src: '**/themes/*/library.source.less',
						dest: '<%= dir.dist %>/resources'
					}
				],
				options: {
					rootPaths: [
						'<%= dir.ui5libs %>/sap.ui.core/src',
						'<%= dir.ui5libs %>/themelib_sap_belize/src',
						'<%= dir.src %>'
					],
					library: {
						name: '<%= libraryName %>'
					}
				}
			}
		},

		openui5_preload: {
			library: {
				options: {
					resources: '<%= dir.src %>',
					dest: '<%= dir.dist %>/resources'
				},
				libraries: true
			}
		},

		clean: {
			dist: '<%= dir.dist %>/'
		},

		copy: {
			dist: {
				files: [ {
					expand: true,
					cwd: '<%= dir.src %>',
					src: [
						'**'
					],
					dest: '<%= dir.dist %>/resources'
				}, {
					expand: true,
					cwd: '<%= dir.test %>',
					src: [
						'**'
					],
					dest: '<%= dir.dist %>/test-resources'
				} ]
			}
		},

		eslint: {
			src: ['<%= dir.src %>'],
			test: ['<%= dir.test %>'],
			gruntfile: ['Gruntfile.js']
		}

	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-openui5');
	grunt.loadNpmTasks('grunt-eslint');

	// Server task
	grunt.registerTask('serve', function(target) {
		grunt.task.run('openui5_connect:' + (target || 'src') + ':keepalive');
	});

	// Linting task
	grunt.registerTask('lint', ['eslint']);

	// Build task
	grunt.registerTask('build', ['openui5_theme', 'openui5_preload', 'copy']);

	// Default task
	grunt.registerTask('default', [
		'lint',
		'clean',
		'build',
		'serve:dist'
	]);
};
