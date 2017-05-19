# Tips, tricks and snippets

## Table of contents

* [Vendor and .gitignore](#vendor-gitignore)


<a name="vendor-gitignore"></a>
## Add vendor folder of the theme to .gitignore

If you using Git to manage your project than you can drop in issue, then after migration theme is broken, it's because vendor folder set in .gitignore, and STARTER theme has this folder also to store third-party libraries. Drupal 8 by default exclude vendor folder from repo. All you need to do is add force include for this folder.

~~~bash
# Don't forget to replace STARTER with your theme name.
!/themes/custom/STARTER/styles/scss/vendor/
~~~