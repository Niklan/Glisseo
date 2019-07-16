# Getting started

## Creating your own theme

1. Copy and paste **STARTER** folder to `/theme` or `/theme/custom` directory.
2. Rename **STARTER** folder to name of your theme. The name must be unique. I.e. my_theme
3. In the root of your new theme, also rename each file that contains **STARTER** by replacing it's on your theme name. The replacement must be the same as theme folder named. Don't forget to rename or remove hook in **includes/structure.inc**.
4. Remove `hidden: true` from **THEMENAME.info.yml** file.
5. In **THEMENAME.info.yml** also don't forget to replace each **STARTER** by your theme name. Otherwise, styles will not be included on the pages.

If you did it right, you can find your theme on the Appearance page and install it. To avoid some problems, it's recommended to enable base theme as well, which is Glisseo. You don't need to make it default, just enable. 

## Compile SCSS

The theme is based on SCSS preprocessor. So, you need to install all the required packages to compile it.

For this, recommended using node.js + gulp. To compile it, required several npm packages: gulp, gulp-sass, and gulp-sourcemaps.

You can install them separately or use package.json from the root of your theme.

### Auto installtion

**yarn**

~~~bash
cd /theme/THEMENAME
yarn install
~~~

**npm**

~~~bash
cd /theme/THEMENAME
npm install
~~~

## Deployment

When it comes to deployment your theme, it's recommended to install all theme dependencies with `--no-dev` option. This will be much faster, and will not download development packages with a lot of dependencies. Which is also has benefits for security reasons.
