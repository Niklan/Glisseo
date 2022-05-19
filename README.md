<p align="center">
 <img src="https://rawgit.com/Niklan/Glisseo/8.x-1.x/logo.svg" align="center" alt="Glisseo Logo">

 <p align="center">
   Base theme for Drupal with starterkit.
 </p>
</p>

## Features

- **Modern CSS** — which includes **CSS variables** for styling and **CSS grids** for layouts!
- **Fully native** — not requires node.js or anything similar, ready to use without any extra steps.
- [ITCSS architecture](https://github.com/ahmadajmi/awesome-itcss) for style structure. If you're not familiar with ITCSS, it's recommended to watch [this presentation](https://www.youtube.com/watch?v=1OKZOV-iLj4&feature=youtu.be&t=524) by Harry Roberts (@csswizardry) to get inspired.
- [BEM methodology](https://bem.info/) for template class naming. In [variation](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) of Harry Roberts (@csswizardry) as well.

The theme provides only a basic styles for HTML elements (and some Drupal specific ones), a small set of tools and a pre-organized structure. This means that you need to design the site and connect all the necessary libraries and extensions by yourself. It's a price for the flexibility and freedom that a theme gives you. It's a canvas with some important brushes.

## Getting started

### Structure of CSS

This theme is uses [ITCSS architecture](https://github.com/ahmadajmi/awesome-itcss).

**It's highly recommended to watch [this video from it's creator with explanation](https://youtu.be/1OKZOV-iLj4?t=524)**.

![ITCSS](https://i.imgur.com/mropqbH.png)

Each level of triangle is much narrow and used for specific usecase.

At the best, utilities is never used, because they meant to have styles with `!important` key. Use it in the cases where you can't do it without it.

## Starter theme

**STARTER** — the only starter theme. It's fully vanilla CSS and JavaScript.

### Create theme from starter

1. Copy and paste **STARTER_*** folder to `/themes/custom` directory.
2. Rename **STARTER*** folder to name of your theme.
3. Remove **.txt** suffix from **STARTER.info.yml.txt** filename. You should have **STARTER.info.yml**.
4. Rename all files with **STARTER** in its filename:
   1. **STARTER**.breakpoints.yml
   2. **STARTER**.info.yml
   3. **STARTER**.layouts.yml
   4. **STARTER**.libraries.yml
   5. **STARTER**.theme
5. Replace all **STARTER** strings with your theme name in that files:
   1. **STARTER**.breakpoints.yml
   2. **STARTER**.info.yml.txt

If you did it right, you can find your theme on the Appearance page and install it. To avoid some problems, it's recommended to enable base theme as well, which is Glisseo. You don't need to make it default, just enable.
