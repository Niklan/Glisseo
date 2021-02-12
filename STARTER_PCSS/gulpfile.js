const { src, dest, watch, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
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

exports.compileCss = compileCss;
exports.default = exports.watchCss = watchCss;
