'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('./src/styl/**/*.styl', ['stylus']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/jade/**/*.jade', ['jade']);
  gulp.watch('./app/**/*.html');
  gulp.watch('./src/img/**/*.{jpg,png,gif}', ['imagemin']);
});
