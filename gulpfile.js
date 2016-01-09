var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babel = require('gulp-babel');

gulp.task('bundle', function () {
  browserify({
    entries: './dist/components/App.js',
    extensions: ['.js'],
    debug: true
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public/js'));
});

gulp.task('transpile', function () {
    return gulp.src('./src/**/*.jsx')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['transpile', 'bundle']);

gulp.task('start', ['build'], function () {
    nodemon({
        script: './dist/Server.js'
        , ext: 'jsx json'
        , tasks: ['build']
    });
});
