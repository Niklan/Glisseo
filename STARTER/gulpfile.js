'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  scss: './styles/scss/**',
  css: './styles/scss/styles.scss'
};

gulp.task('sass', function () {
  gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./styles/css/'));
});

gulp.task('watch', function () {
  gulp.watch(paths.scss, ['sass']);
});

gulp.task('default', ['watch', 'sass']);
