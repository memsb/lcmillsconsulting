const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bake: {
            build: {
                files: {
                    "dist/index.html": "src/index.html",
                    "dist/about.html": "src/about.html",
                    "dist/blog.html": "src/blog.html",
                    "dist/contact.html": "src/contact.html",
                    "dist/services.html": "src/services.html",
                    "dist/guides.html": "src/guides.html",
                }
            }
        },
        webpack: {
            options: {
              stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
            },
            prod: webpackConfig,
            dev: webpackConfig,
        },
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-bake');

    // Default task(s).
    grunt.registerTask('default', ['bake', 'webpack']);
};