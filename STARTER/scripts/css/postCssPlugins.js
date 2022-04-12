import postcssCustomMedia from "postcss-custom-media";
import {paths} from "../config";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

/**
 * Provides the plugins to use with PostCSS.
 */
let postCssPlugins = [
  postcssCustomMedia({
    importFrom: paths.projectRoot + '/assets/css/01-generic/media-breakpoints.pcss',
  }),
  autoprefixer(),
  cssnano({preset: 'default'}),
];

export default postCssPlugins;
