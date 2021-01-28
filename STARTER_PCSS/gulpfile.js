const { src, dest, watch, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssCustomMedia = require('postcss-custom-media');
const postcssImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');

/**
 * Builds CSS files from PostCSS.
 *
 * @return {*}
 */
function buildCss() {
  let plugins = [
    postcssImport(),
    postcssNesting(),
    postcssCustomMedia({
      importFrom: 'assets/pcss/01-generic/media-breakpoints.pcss',
    }),
    autoprefixer(),
    cssnano({ preset: 'default' }),
  ];

  return src(['assets/pcss/**/*.pcss'])
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(rename({
      extname: '.css',
    }))
    .pipe(sourcemaps.write('maps'))
    .pipe(dest('assets/css/'));
}

/**
 * Watch for SCSS file changes and build CSS if any of them changed.
 */
function watchCss() {
  watch('assets/pcss/**/*.pcss', parallel(buildCss));
}

exports.buildCss = buildCss;
exports.default = exports.watchCss = watchCss;
