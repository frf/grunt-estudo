/**
 * Created by fabior on 05/09/16.
 */
module.exports = function( grunt ){
// Project configuration.
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
        watch: {
            dist: {
                files: ['assets/_js/**/*'],
                tasks: ['uglify']
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['uglify']);
    grunt.registerTask('w',['watch']);
};
