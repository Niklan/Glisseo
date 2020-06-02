const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const postcssCustomMedia = require('postcss-custom-media');

gulp.task('sass', function() {
  return gulp.src([
    'assets/scss/03-generic/generic.scss',
    'assets/scss/04-elements/elements.scss',
    'assets/scss/05-objects/objects.scss',
    'assets/scss/06-components/components.scss',
    'assets/scss/07-utilities/utilities.scss',
  ])
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({includePaths: ['node_modules']}).on('error', sass.logError))
    .pipe(postcss([
      postcssCustomMedia(),
      autoprefixer(),
    ]))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('assets/scss/**', gulp.parallel('sass'));
});

gulp.task('default', gulp.series('sass', 'sass:watch'));
