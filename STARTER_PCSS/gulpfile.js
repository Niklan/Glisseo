const { src, dest, watch, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssCustomMedia = require('postcss-custom-media');
const postcssImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');

const destinationToSource = function (file) {
  // Save result file in the folder of it's source.
  return file.base;
};

/**
 * Builds CSS files from PostCSS.
 */
function compileCss() {
  let plugins = [
    postcssImport(),
    postcssNesting(),
    postcssCustomMedia({
      importFrom: 'assets/css/01-generic/media-breakpoints.pcss',
    }),
    autoprefixer(),
    cssnano({ preset: 'default' }),
  ];

  return src(['assets/css/**/*.pcss'])
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(rename({
      extname: '.css',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(destinationToSource));
}

/**
 * Watch for SCSS file changes and build CSS if any of them changed.
 */
function watchCss() {
  watch('assets/pcss/**/*.pcss', parallel(compileCss));
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
