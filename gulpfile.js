var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var nodemon = require("gulp-nodemon")
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');

var path = {
  ALL: ['src/**/*.jsx', 'src/**/*.js'],
  DEST_BUILD: 'public/js'
};

gulp.task('webpack', [], function() {
  return gulp.src(path.ALL) // gulp looks for all source files under specified path
    .pipe(sourcemaps.init({loadMaps: true})) // creates a source map which would be very helpful for debugging by maintaining the actual source code structure
    .pipe(stream(webpackConfig)) // blend in the webpack config into the source files
    .pipe(uglify())// minifies the code for better compression
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('dev', ['webpack'], function () {
    nodemon({
        script: './dist/Server.js'
        , ext: 'jsx json'
        , tasks: ['webpack']
    });
});

gulp.task('default', ['watch']);