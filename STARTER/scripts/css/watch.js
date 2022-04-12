import {parallel, watch} from 'gulp';
import {compileCss} from './compile';
import {paths} from '../config';

/**
 * Watches for changes and recompile.
 */
function watchCss() {
  watch(paths.css.source, parallel(compileCss));
}

export {
  watchCss,
}
