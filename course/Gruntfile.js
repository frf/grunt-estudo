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
        }//uglify
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',['uglify']);
};