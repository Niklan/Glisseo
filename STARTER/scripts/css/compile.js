import {dest, src} from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import {paths} from "../config";
import postCssPlugins from "./postCssPlugins";

/**
 * Compiles styles for theme.
 */
function compileCss() {
  return src(paths.css.source)
    .pipe(sourcemaps.init())
    .pipe(postcss(postCssPlugins))
    .pipe(rename({
      extname: '.css',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.css.destination));
}

export {
  compileCss,
}
