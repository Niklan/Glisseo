const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const postcssCustomMedia = require('postcss-custom-media');

const destinationToSource = function (file) {
  // Save result file in the folder of it's source.
  return file.base;
};

/**
 * Builds CSS files from SCSS.
 */
function compileCss() {
  return src([
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
    .pipe(dest('assets/css/'));
}

/**
 * Watch for SCSS file changes and build CSS if any of them changed.
 */
function watchCss() {
  watch('assets/scss/**', parallel(compileCss));
}

/**
 * Builds JS files.
 */
function compileJs() {
  return src([
    'assets/js/**/*.js',
  ])
    .pipe(terser())
    .pipe(rename(function (path) {
      // If file contains .es6.js ending, strip 'es6' part.
      path.basename = path.basename.replace('.es6', '');
    }))
    .pipe(dest(destinationToSource));
}

/**
 * Watch for JS file changes and build if any of them changed.
 */
function watchJs() {
  return watch('assets/js/**/*.js', parallel(compileJs));
}

exports.compileJs = compileJs;
exports.watchJs = watchJs;
exports.compileCss = compileCss;
exports.watchCss = watchCss;
exports.watchAll = parallel(watchJs, watchCss);
exports.default = exports.compileAll = parallel(compileJs, compileCss);
