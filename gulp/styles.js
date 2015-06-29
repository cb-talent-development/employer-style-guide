'use strict';

var gulp = require('gulp'),
  paths = gulp.paths,
  $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
  return $.rubySass(paths.src + '/app')
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(paths.tmp + '/serve/app/'));
});
