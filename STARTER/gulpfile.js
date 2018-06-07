'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const lost = require('lost');

gulp.task('sass', function() {
  return gulp.src([
    'assets/scss/generic/generic.scss',
    'assets/scss/elements/elements.scss',
    'assets/scss/objects/objects.scss',
    'assets/scss/components/components.scss',
    'assets/scss/utilities/utilities.scss',
  ])
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**', ['sass']);
});

gulp.task('default', ['watch', 'sass']);
