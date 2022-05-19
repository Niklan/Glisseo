# Changelog

## [Unreleased][unreleased]

### Base theme

- Remove JavaScript build scripts. `*.es6.js` files renamed to `*.js`. All modern browsers are supporting ES6 syntax now. Drupal core does [the same thing](https://www.drupal.org/node/3278413), so this is absolutely safe now.
- Remove PostCSS build scrips. `*.pcss` files renamed to `*.css`. There is absolutely no need into PostCSS build script in the theme at this point. The only thing is actually used from PostCSS was [postcss-custom-media](https://github.com/postcss/postcss-custom-media). This plugin by default is used in 4 CSS file.
- There is no more NodeJS dependencies on theme. The whole process with build step is more complicated than benefits provided by it. This will allow to use theme without any NodeJS at all, fully native everything. Just copy-paste and you are ready, no extra steps!

### Starter theme

- No changes has been made.

## [2.0.0-alpha4]

### Base theme

- No changes has been made.

### Starter theme

- Issue [#3275268](https://www.drupal.org/node/3275268): Fix media queries in `grid.pcss`.

## [2.0.0-alpha3]

### Base theme

- No changes has been made.

### Starter theme

- Improved `.form-element` with `size` attribute set on mobile devices.
- Improved color variables.
- Added more `libraries-override` to reduce amount of unused styles on the page.
- Improved system libraries override and added jQuery UI dialog clean styles.
- Added custom AJAX indicator for easier theming.

## [2.0.0-alpha2]

- Added an empty libraries and attached them in templates which has styles in STARTER theme. Starter theme doesn't has these templates, this means to attach custom libraries for each of them it should be copied and updated, but his is too much work. For that, an empty libraries was attached into them and starter libraries just extends them with their own.
- [#3274961](https://www.drupal.org/node/3274961) Improved README.
- [#3275003](https://www.drupal.org/node/3275003) Rename STARTER in package.json?

### Starter theme

- Added `libraries-extends` into `*.info.yml` file. This replaces `STARTER_preprocess()` implementation.
- `STARTER_preprocess()` implementation was removed.
- Remove unnecessary PostCSS dependencies: `postcss-nesting` (used only in `breadcrumb.pcss` and `pager.pcss`), `postcss-import` (not used at all).
- [#3274992](https://www.drupal.org/node/3274992) Fixed wrong comments.

## [2.0.0-alpha1]

This is a small release that is mostly equals to 8.x-1.0-alpha21.

### Base theme

- Updated README file.

## Starter theme

- Removed STARTER_SCSS. I'm no longer use SCSS for a more than year, I don't want to support 'dead' starter. There is no any reason in it, since the PostCSS does the same and closer to a vanialla CSS. If you still need it, it downs to rename *.pcss to *.scss and replace PostCSS watcher with SASS compiler.
- STARTER_PCSS is now STARTER.

[unreleased]: https://github.com/Niklan/Glisseo/compare/2.0.x-alpha4...HEAD
[2.0.0-alpha4]: https://github.com/Niklan/Glisseo/compare/2.0.0-alpha3...2.0.0-alpha4
[2.0.0-alpha3]: https://github.com/Niklan/Glisseo/compare/2.0.0-alpha2...2.0.0-alpha3
[2.0.0-alpha2]: https://github.com/Niklan/Glisseo/compare/2.0.0-alpha1...2.0.0-alpha2
[2.0.0-alpha1]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha21...2.0.x
