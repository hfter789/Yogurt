var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify({
    entries: './components/SiteBody.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify, {presets: ['es2015', 'react']})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public/js'));
});

gulp.task('dev', ['build'], function () {
    nodemon({
        script: 'index.js'
        , ext: 'jsx json'
        , tasks: ['build']
    });
});
