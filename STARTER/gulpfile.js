let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('autoprefixer');
let postcss = require('gulp-postcss');

gulp.task('sass', function() {
  return gulp.src([
    'assets/scss/generic/generic.scss',
    'assets/scss/elements/elements.scss',
    'assets/scss/objects/objects.scss',
    'assets/scss/components/components.scss',
    'assets/scss/utilities/utilities.scss',
  ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('assets/scss/**', gulp.parallel('sass'));
});

gulp.task('default', gulp.series('sass', 'sass:watch'));
