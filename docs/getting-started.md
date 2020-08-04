# Getting started

## Creating your own theme

1. Copy and paste **STARTER** folder to `/theme` or `/theme/custom` (recommended) directory.
2. Rename **STARTER** folder to name of your theme. The name must be unique. I.e. my_theme
3. In the root of your new theme, also rename each file that contains **STARTER** by replacing it's on your theme name. The replacement must be the same as theme folder named. Don't forget to rename or remove hook in **includes/structure.inc**.
4. Rename **STARTER.info.yml.txt** to **THEMENAME.info.yml**. Just remove .txt so Drupal can find the theme.
5. In **STARTER.info.yml** also don't forget to replace each **STARTER** by your theme name. Otherwise, styles will not be included on the pages.

If you did it right, you can find your theme on the Appearance page and install it. To avoid some problems, it's recommended to enable base theme as well, which is Glisseo. You don't need to make it default, just enable.

### Install dependencies

```bash
cd /theme/custom/THEMENAME
yarn install
```

## Compile SCSS

Theme provides two script inside `package.json` file:

- `buildCss` — build SCSS files on run and exit.
- `watchCss` — watch changes for SCSS and build on detection. Works in a loop until stopped.

```bash
cd /theme/custom/THEMENAME
yarn run watchScss
```

## Project package.json

If you want to user projects `package.json` to control all project staff, you can include dependencies into it like:

```
  "devDependencies": {
    "THEMENAME": "file:./web/themes/custom/THEMENAME"
  }
```

then run

```
yarn install
```

Also you can move scripts into root project file.

```
  "scripts": {
    "build:theme:css": "THEME_PATH=web/themes/custom/THEMENAME; gulp buildCss --gulpfile=$THEME_PATH/gulpfile.js;",
    "watch:theme:css": "THEME_PATH=web/themes/custom/THEMENAME; gulp watchCss --gulpfile=$THEME_PATH/gulpfile.js;"
  },
```
