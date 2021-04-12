import {dest, src} from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename'
import sassGlob from 'gulp-sass-glob';
import sass from 'gulp-sass';
import {paths} from "../config";
import postCssPlugins from "./postCssPlugins";

/**
 * Compiles styles for theme.
 */
function compileCss() {
  return src(paths.css.source)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({includePaths: ['node_modules']}).on('error', sass.logError))
    .pipe(postcss(postCssPlugins))
    .pipe(rename({
      extname: '.css',
    }))
    .pipe(sourcemaps.write('maps'))
    .pipe(dest(paths.css.destination));
}

export {
  compileCss,
}
