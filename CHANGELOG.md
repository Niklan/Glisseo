# Changelog

## [Unreleased][unreleased]

### Base theme

- **Backwards Compatibility break.** Most of views template was deleted. The base one was updated to support new bem naming system.
- [#3110786](https://www.drupal.org/project/glisseo/issues/3132338) Navigation region missing from page.html.twig
- [#3132338](https://www.drupal.org/project/glisseo/issues/3132338) Base theme is no more hidden.
- [#3137340](https://www.drupal.org/project/glisseo/issues/3137340) Drupal 9 compatibility.
- Removed ds-layout.svg, since theme not provide any DS layout anymore.
- The images were replaced by the new one which is bigger for the Claro theme. The source images was remove and moved to Figma (https://www.figma.com/file/EaQ02txC7UeV7BfavDblXPJc/Glisseo).
- Changed themes logo.
- Changed favicon.
- `base theme` set to `stable`.
- Fixed hierarchy menu generation.

### Starter theme

- [#3110722](https://www.drupal.org/project/glisseo/issues/3137340) Typo inhirit in # components.css
- [#3127441](https://www.drupal.org/project/glisseo/issues/3127441) `--selection-background` is now `var(--color-silver)`.
- [#3127434](https://www.drupal.org/project/glisseo/issues/3127434) `--color-silver` now `#c0c0c0` instead of `#aaaaaa`.
- STARTER theme `core` parameter replaced by `core_version_requirement`.
- Updated scripts to `build:theme` (single time compile SCSS) and `watch:theme` (watch for file changes and compile them).
- Added `:disabled` style for `.form-control`.
- Removed all SCSS inheritance.
- Removed normalize.css. Added [Modern CSS reset](https://github.com/hankchizljaw/modern-css-reset) which do the same with less styles.
- ITCSS folder was prefixed with their order number to make it clear, what their importance. Also fix some bugs with `ui` folder which contains button and other element styling, but since alphabetically `U` is at the very end, it's impossible to override styles.

## [1.0-alpha15]

### Base theme

- Improved menu BEM generation and markup.
- Improved region BEM generation and markup.
- Removed `area-labeledby` for breadcrumbs. Because it incorrect. WCAG is not priority now.
- **Breaking.** They were created for the previous BEM naming. It showed that the forms do not adapt well to this, because they are assembled from many smaller Blocks. For now, the best solution is to use default templates.

### Starter theme

- Improved line-height for button and form-control.
- Improved bem modifier generation for view modes in fields.

## [1.0-alpha14]

### Base theme

- Fixed menu BEM base class pass for menu block.
- Fields for entities now is BEM blocks, not elements. This provides a better flexibility and control over markup.
- Improved BEM block class naming for blocks using layout builder.
- Improved layout onecol naming.
- Base theme now adds `bem_block`, `bem_classes`, `bem_modifiers` to all theme hooks.

### Starter theme

- Secondary color renamed to accent.
- Added _grid.scss for grid variables and reworked example for `.main-layout`.

## [1.0-alpha13]

### Base theme

### Starter theme

- Remove `visually-hidden()` mixin.
- Remove all recursive include for `.inc` files, because they can affect performance.

## [1.0-alpha12]

### Base theme

No changes.

### Starter theme

- Improve heading weights.
- Remove `breakpoint()` mixin, `$breakpoints` SASS variables. Added `postcss-custom-media` and definitions for it. This is polyfill for CSS 5 custom media variables.
- Remove `hsl-color-variable()` mixin presented in alpha11. It's not so helpful.
- Remove CSS gradient mixins. Previously they're used for browser prefixes, but not this is done by PostCSS.
- Remove helper mixins. The'are not helping anymore.

## [1.0-alpha11]

This release is targeting for simplify things.

Instead of providing tools that may or may not be useful, they are no longer available at all. You decide for yourself what you need and evolve the theme for your needs.

### Base theme

- Fixed user view mode detection.
- Removed "aria-labelledby" for breadcrumbs since it wrong. Aria attributes is not a priority now.
- Class for pager active element is not BEM modifier `pager_item--active` instead of additional class `is-active`.
- Change class `.tabs__item--is-active` to `.tabs__item--active`.
- Change class `.tabs__menu-item-link` to `.tabs__link`.

### Starter theme

- Overhaul of styles.
- **CSS variables** instead SCSS variables (everywhere it's possible). Which opens new possibilities.
- Almost every SCSS mixin and function were removed.
- **Mobile first!** This means, breakpoints are changed. They are is now simple is it can be. Think less, write less, do the same!
- Nested SCSS is UNnested. "Just because you can nest, doesn't mean you always should." - @mdo.
- Added `gulp-sass-glob` as dev dependency. This will allow theme to auto-import all styles without directly controlling it. With ITCSS this won't be a problem.

## [1.0-alpha10]

### Base theme

- Removed package.json from base theme folder. Because I don't know why it's here, simply useless file.
- **Breaking change**. BEM block for commerce_product changed from `product` to `commerce-product`.
- **Breaking change**. All Twig blocks now have a block inside wrapper named as entity or template. Some of them, which already have it, was renamed if it's not fit.
- If view mode for user template is missing, we set "default" as the default value.

### Starter theme

- Issue [#7](https://github.com/Niklan/Glisseo/issues/7). The title for **block--system-menu-block.html.twig** is no more rendering if it's empty.
- Issue [#6](https://github.com/Niklan/Glisseo/issues/6). Changed tag in package.json from susy to Lost Grid.
- Improved **package.json** by moving all development packages to devDependencies. For production now better us `npm install --production`, this will be much faster.
- Rename STARTER.info.yml to STARTER.starter.info, because drupal.org detect it and adds metadata which not needed.
- Inspired by INUITCSS added `$baseline` and other variables to make sizes more consistent. This improves grid and spacings for "[Rule of 8px](https://medium.com/wayfair-design/more-padding-please-b95e19422acc)".
- Added new SCSS function `color-palette()`. This function can create [material-like](https://material.io/design/color/the-color-system.html#color-usage-palettes) palette colors. E.g. `color-palette(theme-color(), 900);`
- Body bg color moved to `$theme-colors` variable.
- Added new values provided by default for `$theme-colors`: `primary-variant`, `secondary-variant`, `background`, `surface`, `on-primary`, `on-secondary`. Also inspired by [material guidelines](https://material.io/design/color/the-color-system.html#color-theme-creation).
- Other fixes and minor improvements.

## [1.0-alpha9]

### Base theme

- Issue [#3](https://github.com/Niklan/Glisseo/issues/3) "Unknown "dd" function"
- Removed outdated documentation.
- Added new variable `main_layout_attributes` contains empty object `Attribute()` for main layout modifiers on demand.

### Starter theme

- Lost Grid default gutter is now multiple by 8px as `gap()`. A bit changed breakpoints and their gutter to be multiple by 8px.
- Fixed active tab underline.
- Bumped up all npm dependencies. MDI Font to 3.x, Gulp to 4.x.
- Updated gulpfile.js to work with the 4.x version.
- Added **_variables.override.scss** for overriding and custom variables.
- Improved recommended order for components.
- Added layout folder into components.
- Adjusted default media sizes.
- **links.html.twig** is now has BEM class naming.
- Improved styles and template for breadcrumbs.
- Mixins `media-container()`, `make-container-max-widths()` refactored to Bootstrap-like behavior and naming: `make-container()`, `make-container-max-widths()` accordingly.
- Mixin `media-container-gutters()` was removed, because it's not needed anymore.
- Added example preprocess page in includes/structure.inc for main layout modifiers.
- Squashed some bugs and improved overall quality.

## [1.0-alpha8]

### Base theme

- Updated README.md.
- Added workaround for field view mode if it missing.
- Added `{% spaceless %}` wrapper for breadcrumbs.
- Added blocks content and title for **taxonomy-term.html.twig**.
- Removed id's for taxonomy term and paragraphs.
- Added **media.html.twig** template.
- Added some blocks for templates for easier extending.
- Refactor block templates to use Twig `extends`.

### Starter theme

- Import for math.scss in variables.scss to support `gap()` function.
- Improved stylelintrc.
- Improved styles for breadcrumbs.scss.
- Improved tabs flexbox.
- Added mixin `button-size()`;
- Added `[bem_block]--label-inline` class for field.

## [1.0-alpha7]

Hotfix version. Fix and improvements for alpha6 that can lead to problems.

### Base theme

- **Fix** bug in paragraph.html.twig.
- **Improved** block_id generation. Much more reliable in cases when block rendered programmatically.
- **Improved** block--system-branding-block.

### Starter theme

- **Fix** path to MDI icons font.
- Removed quotes for keys of gray colors.

## [1.0-alpha6]

**This release incompatible with previous versions.**

This release is all about SCSS and styles quality and management. Most significant change is [ITCSS architecture](https://github.com/ahmadajmi/awesome-itcss) for SCSS folder.

### Base theme

- Base theme is has hidden to true now.
- All regions were removed from the base theme. They are not needed here.
- **Experimental**. Reworked all templates to BEM class naming.
- page.html.twig moved to STARTER templates.
- Added user entity theme suggestions user--{VIEW_MODE}.html.twig.
- Added user.html.twig.
- Added block--system-branding-block.html.twig.
- Added other templates which were missing and loaded from stable base theme.
- Added new field theme suggestions. field--{ENTITY}--{BUNDLE}--{FIELD_NAME}--{ENTITY_ID}.html.twig, field--{ENTITY}--{BUNDLE}--{FIELD_NAME}--{VIEW_MODE}.html.twig.

### Starter theme

- Added [stylelint](https://stylelint.io/) configuration.
- Refactored SCSS folder to ITCSS structure.
- Refactored all SCSS style comments to be excluded from compilation.
- Improved total styles size, from ~7k lines on clean starter theme and ~150kb size to ~1k lines and ~20kb size.
- Improved performance of compilation due to more smart imports. ~600ms -> ~120ms on empty starter.
- Imports are back and sass-glob is not used anymore. This is the cost of ITCSS architecture which is awesome!
- Single styles.css is now split to 5 separated files according to ITCSS weight. Also, there is now 4 libraries for styles which included in their own groups.
- Material Design Icons package changed from mdi to @mdi/font to support new packages and icons.
- Added commented example in STARTER libraries how to import Google Fonts correctly.

## [1.0-alpha5]

### Base theme

- Added new theme hook suggestion for comment `comment--{BUNDLE}--{VIEW_MODE}.html.twig`.
- Added `<a id="comments"></a>` in field--comment.html.twig.
- Added classes for comment template.
- field--comment.html.twig label is now translatable.
- Removed includes/layouts.inc. There was preprocess for old reset layout. After remove it, file was not needed.

### Starter theme

- `@lost cycle` changed from `none` to `auto`.
- `global-styling` library is renamed to `global-assets`.
- Added `$blockquote-bg` variable.
- Removed default white background from pager.
- Added `$mark-color` variable.
- Set `font-size: $font-size-base;` for `code` element. This will override normalize.
- Added `color: $input-color;` for `textarea` element.
- Removed `$susy` variable. Which was forgotten.

## [1.0-alpha4]

### Base theme

- **Possible incompatible change.** Removed ds-reset layout.
- Added default layout templates with corrected markup.
- **Incompatible change**. Refactoring all templates and markup to satisfy [Drupal 8 CSS architecture](https://www.drupal.org/docs/develop/standards/css/css-architecture-for-drupal-8) (OOCSS).
- Fixed previously added suggestions for paragraphs:
  - paragraph--{ID}--{VIEW_MODE}.html.twig
  - paragraph--{ID}.html.twig
- Added suggestion to block content type:
  - block--{BLOCK_TYPE}.html.twig
- Slightly updated logo colors. For base theme and starter, the SVG logo is now contained objects, not the text because of font face that can be missed on systems.
- Added new templates from the stable theme.
- **Possible incompatible change.** Added default **commerce-product.html.twig** template.
- Added `data-hook-suggestion` for input fields support.

### Starter theme

- Added new variable `$input-color` and added to inputs.
- Class naming according to OOCSS.
- All base styles were reworked to respect refactoring to OOCSS.
- Installed `gulp-sass-glob` and updated gulpfile to use it.
- SCSS folder is restructured for `gulp-sass-glob`. Now we have only one import file `styles.scss`, there are no more `_all.scss` inside any folder! You can now just create new `_file.scss` and it will be compiled! The splitting for components and base style to `_styles.scss`, `_variables.scss` and `_mixins.scss` is now removed and they are in a single file. This is done because gulp-sass-glob can't respect order and it will crash. The auto-include is much preferable than this splitting.
- Breadcrumbs are now responsive by default.
- Added PostCSS.
- `gulp-autoprefixier` replaced by `autoprefixier` from PostCSS.
- SUSY is removed, to replace it added [Lost Grid](http://lostgrid.org) for PostCSS.
- Added templates for local actions.
- Many of elements reworked and restyled.
- Added SCSS function `color-level()` with same functionality as `theme-color-level()`.

## [1.0-alpha3]

### Base theme

No changes have been made.

### Starter theme

- Added new variable `$gap-size` with default value of `8px`.
- Added new function `gap()` which will be used by default in theme for "rule of 8px". You can read about this technique [here](https://medium.com/wayfair-design/more-padding-please-b95e19422acc).
- Added information about [SCSS architecture](docs/scss-architecture.md) in this theme.
- Removed default README.md files from scss folders.
- `/assets/scss/base/typography` was improved and reworked. Added new variables, edited old, some styles were removed to follow rules of base folder.
- Added new variable `$gray-50` and color for it.
- All gray colors were replaced with material design gray palette.
- Improve `media-container()` mixin. Now it supports argument `$with-gutters: true` which allows disabling gutters and include the only width of the container.
- Material Design Icons is now default icon font in theme. FontAwesome dependency was removed and added documentation on how to take them back.
- All dependency libraries were updated.
- Added font-family parameter on all `input` element form the default variable. This will override the normalize font reset.

## [1.0-alpha2]

### Base theme

No changes have been made.

### Starter theme

- Button component base style moved from `.button` class to placeholder `%button`. This is a more flexible solution because of `@extend .class` can break in some behaviors with ordering.
- In `/assets/utilities/_all.scss` function and variables are swapped. The function now has higher priority. It allows using functions inside variables.
- Colors like `$ui-site-color-1` and so forth are replaced by single variable -colors which are an array.
- Added new function `theme-color()`. These functions return color by his key from -colors array. Bootstrap alike.
- Added new function `theme-color-level()`. This function returns color mixing by his key and level. 0 - is the same color, negative values will desaturate color, positive is the opposite. Bootstrap alike.
- All base colors variables were replaced by functions.
- Added new color map `$grays` with gray colors. Bootstrap alike.
- Added new function `gray()`. Returns gray color by his key. Bootstrap alike.
- All old `$gray-*` variables were replaced by `gray()` function.
- Added `$colors` variable for all other colors. Bootstrap alike.
- Added new function `color()`. Returns color by his key. Bootstrap alike.
- Some default colors were replaced by a new `color()` function.
- `color-contrast()` function is renamed to `color-yiq()`.
- Added two new variables `$yiq-text-dark` and `$yiq-text-light`. They used in `color-yiq()` function as default values.
- Pointless readme files in assets folder, which created for keep folders in repo were removed and replaced by hidden files `.gitkeep`.
- `base/_base.scss` is moved to personal folder `base/global`.
- Added variables to control the focus outline and set a default value. It's [bad practice](http://www.outlinenone.com) to ignore them, so they are back now!
- `base/_typography.scss` is moved to personal folder `base/typography`.
- Added !default to all variables. They are now overridable in external files.
- Cleaned utility directory.
- Variables are now had several files. By default `_global.scss` to all global default variables and `_custom.scss` with your overridden variables and new ones. You still can edit variables directly, because it's all in your custom theme and can't break anything else. All depends on your preferences.

## [1.0-alpha1]

First initial release with version. For now, I am satisfied by theme at most. Some things can change, but from now on, I'll be track them in that file. I still no recommend to use it without understand the consequences.

Since release of first alpha, now we can use composer to lock theme version, and I recommend to do that. Because the theme is a little bit tricky to maintain. Just a single changed class in the base theme can create a lot of pain after the update. So be careful.

- Added CHANGELOG.md to track all changes.
- Changed composer.json for the theme to be `drupal-theme` instead of being `drupal-custom-theme`.

[unreleased]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha15...HEAD
[1.0-alpha15]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha14...8.x-1.0-alpha15
[1.0-alpha14]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha13...8.x-1.0-alpha14
[1.0-alpha13]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha12...8.x-1.0-alpha13
[1.0-alpha12]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha11...8.x-1.0-alpha12
[1.0-alpha11]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha10...8.x-1.0-alpha11
[1.0-alpha10]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha9...8.x-1.0-alpha10
[1.0-alpha9]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha8...8.x-1.0-alpha9
[1.0-alpha8]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha7...8.x-1.0-alpha8
[1.0-alpha7]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha6...8.x-1.0-alpha7
[1.0-alpha6]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha5...8.x-1.0-alpha6
[1.0-alpha5]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha4...8.x-1.0-alpha5
[1.0-alpha4]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha3...8.x-1.0-alpha4
[1.0-alpha3]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha1...8.x-1.0-alpha3
[1.0-alpha2]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha1...8.x-1.0-alpha2
