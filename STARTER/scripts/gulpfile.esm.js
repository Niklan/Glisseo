import {compileCss} from "./css/compile";
import {watchCss} from "./css/watch";
import {compileJs} from "./js/compile";
import {watchJs} from "./js/watch";
import {parallel} from 'gulp';

export const compile = parallel(compileCss, compileJs);
export const watch = parallel(watchCss, watchJs);
