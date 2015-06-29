'use strict';

var gulp = require('gulp'),
  paths = gulp.paths,
  $ = require('gulp-load-plugins')(),
  wiredep = require('wiredep').stream;

gulp.task('inject', ['styles'], function () {

  var injectStyles = gulp.src([
    paths.tmp + '/serve/app/**/*.css'
  ], { read: false });

  var injectScripts = gulp.src([
    paths.src + '/app/**/*.js'
  ]).pipe($.angularFilesort());

  var injectOptions = {
    ignorePath: [paths.src, paths.tmp + '/serve'],
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'bower_components'
  };

  return gulp.src(paths.src + '/*.html')
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp + '/serve'));
});
