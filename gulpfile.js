var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
  browserify('./client/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('copy', function () {
  gulp.src('client/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('client/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
  gulp.src('client/css/**/*.*')
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['browserify', 'copy'], function () {
  return gulp.watch('client/**/*.*', ['browserify', 'copy']);
});





