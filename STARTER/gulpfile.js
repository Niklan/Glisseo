'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  scss: 'assets/scss/**',
  css: 'assets/scss/styles.scss'
};

gulp.task('sass', function () {
  return gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function () {
  gulp.watch(paths.scss, ['sass']);
});

gulp.task('default', ['watch', 'sass']);
