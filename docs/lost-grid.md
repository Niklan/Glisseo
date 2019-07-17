# Lost Grid

Lost Grid previously (before alpha11) was a part of the STARTER theme. But since theme moving on to modern CSS, this library becomes usless, since we have CSS grids.

If you want get it back, there is instruction how to do it.

**Install dependency**

```bash
npm install --dev lost
```

or

```bash
yarn add --dev lost
```

**Modify gulpfile.js for theme**

At the beginning of gulpfile.js add

```js
let lost = require('lost');
```

and then, use it in `postcss()` pipeline`.

```js
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
```

**Add default settings to styles**

Create file `/assets/scss/settings/_lost-grid.scss` with this content:

```scss
// =============================================================================
// Lost Grid settings.
// @see http://lostgrid.org/docs.html
// =============================================================================

@lost gutter 30px;
@lost flexbox flex;
@lost cycle auto;
@lost clearing left;
@lost rounder 100;
```

Edit it as you want. This is just default values was used previously.

Then, don't forget to include this file in `assets/scss/settings/_core.scss`:

```scss
@import "lost-grid";
```