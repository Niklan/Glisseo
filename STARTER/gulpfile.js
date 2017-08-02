'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const paths = {
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
      .pipe(gulp.dest('./assets/css/'))
      .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  gulp.watch(paths.scss, ['sass']);
});

gulp.task('default', ['watch', 'sass']);
