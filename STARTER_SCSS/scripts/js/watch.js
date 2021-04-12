import {parallel, watch} from 'gulp';
import {compileJs} from './compile';
import {paths} from '../config';

/**
 * Watches for changes and recompile.
 */
function watchJs() {
  watch(paths.js.source, parallel(compileJs));
}

export {
  watchJs,
}
