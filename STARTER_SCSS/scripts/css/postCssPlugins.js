import postcssCustomMedia from "postcss-custom-media";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

/**
 * Provides the plugins to use with PostCSS.
 */
let postCssPlugins = [
  postcssCustomMedia(),
  autoprefixer(),
  cssnano({preset: 'default'}),
];

export default postCssPlugins;
