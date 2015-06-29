'use strict';

var gulp = require('gulp'),
  paths = gulp.paths,
  $ = require('gulp-load-plugins')();

gulp.task('deploy', ['build'], function () {
  return gulp.src(paths.dist + '/**/*')
    .pipe($.ghPages());
});
