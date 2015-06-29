'use strict';

var gulp = require('gulp'),
  paths = gulp.paths;

gulp.task('watch', ['build'], function () {
  gulp.watch([
    paths.src + '/**',
    'bower.json'
  ], ['build']);
});
