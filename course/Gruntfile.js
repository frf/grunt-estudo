/**
 * Created by fabior on 05/09/16.
 */
module.exports = function( grunt ){
// Project configuration.
    var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            file_min_js: {
                files: {
                    'assets/js/main.min.js': ['assets/_js/main.js']
                }
            }
        },//uglify
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/style.min.css': 'assets/_sass/style.scss'
                }
            }
        },
        watch: {
            dist: {
                files: ['assets/_js/**/*','assets/html/**/*'],
                tasks: ['uglify','htmlmin'],
                options:{
                  //  livereload:true
                }
            },
        },
        shell:{
            options:{
                stderr:false
            },
            mkdir:{
                command: function(dir){
                    return 'mkdir '+ dir;
                }
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg()]
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'assets/_img',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'assets/img'                  // Destination path prefix
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'assets/html/index.html',
                }
            },
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                  //  livereload:true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default',['uglify','sass','htmlmin']);
    grunt.registerTask('sass',['sass']);
    grunt.registerTask('w',['watch']);
    grunt.registerTask('mk', function(dir){
        grunt.task.run('shell:mkdir:' + dir);
    });
    grunt.registerTask('img',['imagemin']);
    grunt.registerTask('html',['htmlmin']);
    grunt.registerTask('server',['connect','watch']);
};
