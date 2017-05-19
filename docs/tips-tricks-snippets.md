# Tips, tricks and snippets

## Table of contents

* [Vendor and .gitignore](#vendor-gitignore)
* [Add sidebar classes to <body>](#sidebar-classes)

<a name="vendor-gitignore"></a>

## Add vendor folder of the theme to .gitignore

If you using Git to manage your project than you can drop in issue, then after migration theme is broken, it's because vendor folder set in .gitignore, and STARTER theme has this folder also to store third-party libraries. Drupal 8 by default exclude vendor folder from repo. All you need to do is add force include for this folder.

~~~bash
# Don't forget to replace STARTER with your theme name.
!/themes/custom/STARTER/styles/scss/vendor/
~~~

<a name="sidebar-classes"></a>

## Add sidebar classes to <body>

Sometimes you need to add classes for sidebars in the body for managing your layout. This snippet helps you to do that by adding to `<body>` classes like `layout-sidebar-NAME`. This is only works with regions which starts with `sidebar_`.

Add this to your `THEMENAME.theme`.

~~~php
/**
 * Implements hook_preprocess_HOOK() for HTML document templates.
 * Adds body classes if certain regions have content.
 */
function THEMENAME_theme_preprocess_html(&$variables) {
  foreach ($variables['page'] as $element_key => $element) {
    if (preg_match("/sidebar_(.+)/", $element_key)) {
      $variables['attributes']['class'][] = 'layout-' . str_replace('_', '-', $element_key);
    }
  }
}
~~~
