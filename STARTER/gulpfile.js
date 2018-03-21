'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sassGlob = require('gulp-sass-glob');

gulp.task('sass', function() {
  return gulp.src('assets/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**', ['sass']);
});

gulp.task('default', ['watch', 'sass']);
