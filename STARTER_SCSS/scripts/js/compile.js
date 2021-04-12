import {dest, src} from 'gulp';
import {paths} from "../config";
import sourcemaps from 'gulp-sourcemaps';
import terser from 'gulp-terser';
import rename from 'gulp-rename';

/**
 * Default compilation process.
 */
function compileJs(basePath) {
  return src(paths.js.source)
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(rename(function (path) {
      // Strip 'es6' part.
      path.basename = path.basename.replace('.es6', '');
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.js.destination));
}

export {
  compileJs,
}
