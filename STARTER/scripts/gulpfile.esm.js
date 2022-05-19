import {compileCss} from "./css/compile";
import {watchCss} from "./css/watch";
import {parallel} from 'gulp';

export const compile = parallel(compileCss);
export const watch = parallel(watchCss);
