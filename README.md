<p align="center">
 <img src="https://rawgit.com/Niklan/Glisseo/8.x-1.x/logo.svg" align="center" alt="Glisseo Logo">

 <p align="center">
   Base theme for Drupal with starterkit.
 </p>
</p>

## Features

- **Modern CSS**, which includes **CSS variables** for styling and **CSS grids** for layouts!
- Two starter themes:
  - **SCSS:** The [SCSS](https://sass-lang.com/) based starter theme.
  - **PostCSS:** The [PostCSS](https://postcss.org/) based starter theme. This one will give you full control over your styles and when they must be attached.
- [ITCSS architecture](https://github.com/ahmadajmi/awesome-itcss) for style structure. If you're not familiar with ITCSS, it's recommended to watch [this presentation](https://www.youtube.com/watch?v=1OKZOV-iLj4&feature=youtu.be&t=524) by Harry Roberts (@csswizardry) to get inspired.
- [BEM methodology](https://bem.info/) for template class naming. In [variation](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) of Harry Roberts (@csswizardry) as well.

The theme provides only a basic styles for HTML elements (and some Drupal specific ones), a small set of tools and a pre-organized structure. This means that you need to design the site and connect all the necessary libraries and extensions by yourself. It's a price for the flexibility and freedom that a theme gives you. It's a canvas with some important brushes.

## Getting started

### Structure of SCSS

This theme is uses [ITCSS architecture](https://github.com/ahmadajmi/awesome-itcss).

**It's highly recommended to watch [this video from it's creator with explanation](https://youtu.be/1OKZOV-iLj4?t=524)**.

![ITCSS](https://i.imgur.com/mropqbH.png)

Each level of triangle is much narrow and used for specific usecase.

At the best, utilities is never used, because they meant to have styles with `!important` key. Use it in the cases where you can't do it without it.

**PostCSS** starter doesn't have SETTINGS and TOOLS levels, because they are intended for SASS-only features.

### Chose your starter

#### PostCSS starter

**STARTER_PCSS** — starter theme based on PostCSS. It's most closely to vanilla CSS. Only several plugins are used. It's intended to give you absolute control of your styles with small QoL improvements. Mostly it gives you some future CSS syntax and CSS optimization, nothing else.

When to use:

* You want to attach styles only where they're used and have better results for 'unused styles' coverage report from Lighthouse.
* You want better performance for Web Vitals (PageSpeed). Less CSS is better for mobile.
* You don't need SCSS features like mixins and functions (nesting is supported in PostCSS if you need it).
* You want to be closer to native CSS syntax over than sugar.

#### SCSS starter

**STARTER_SCSS** - this starter is similar to PostCSS, but styles additionally processed by SASS compiler. That means you will have access to all features provided by SASS.

This starter by default will provide 5 CSS in total, so you will not have such control over each individual file like in PostCSS, if you need it, you can alter that behavior, but better consider to use PostCSS in that case, most likely you don't need SASS.

When to use:

* You want SASS features like mixins, functions...
* You don't want bother yourself with Drupal libraries and attaching them on demand.

Before using this starter ask yourself, do you really need SASS features in 2021+? Most likely the answer will be - «no».

### Create theme from starter

1. Copy and paste **STARTER_*** folder to `/themes/custom` directory.
1. Rename **STARTER_*** folder to name of your theme.
1. Inside your theme folder rename every **STARTER** mention with your theme name.
    * *PostCSS only*: Replace every **STARTER** in ***.theme** file with your theme name.
1. Rename **STARTER.info.yml.txt** to **THEMENAME.info.yml**. Just remove .txt so Drupal can find the theme.
1. In **STARTER.info.yml** also don't forget to replace each **STARTER** by your theme name. Otherwise, styles will not be included on the pages.

If you did it right, you can find your theme on the Appearance page and install it. To avoid some problems, it's recommended to enable base theme as well, which is Glisseo. You don't need to make it default, just enable.

### Compile CSS and JS

1. Install all dependencies `npm install`

Then use one of the scripts:

1. `npm run compile`: Compile CSS and JS one time.
1. `npm run watch`: Watch for CSS and JS sources and compile them on change.

Since these scripts will be part of your theme, you can safely modify everything for your needs.
