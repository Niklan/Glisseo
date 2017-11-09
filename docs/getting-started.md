# Getting started

## Creating your own theme

1. Copy and paste **STARTER** folder to `/theme` or `/theme/custom directory`, which you prefer more.
2. Rename **STARTER** folder to name of your theme. The name must be unique. F.e. my_theme
3. In the root of your new theme, also rename each file that contains **STARTER** by replacing it's on you theme name. The replace must be the same as theme folder named.
4. Remove `hidden: true` from THEMENAME.info.yml file.
5. In THEMENAME.info.yml also don't forget to replace **STARTER** by your theme name. Otherwise styles will not be included on the pages.

If you done it right, you can find your theme on Appearance page and install it. To avoid some problems, it's recommend to enable base theme aswell, which is Glisseo. You don't need to make her default, just enable. 

## Compile SCSS

Theme is based on SCSS preprocessor. So, you need to install all required packages to compile it.

For this, recommended to use node.js + gulp. To compile it, required several npm packages: gulp, gulp-sass and gulp-sourcemaps.

You can install them separately or use package.json from root of your theme.

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

### Manual install

**yarn**

~~~bash
cd /theme/THEMENAME
yarn add gulp gulp-sass gulp-sourcemaps
~~~

**npm**

~~~bash
cd /theme/THEMENAME
npm install gulp gulp-sass gulp-sourcemaps
~~~