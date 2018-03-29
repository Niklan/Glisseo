# Tips, tricks and snippets

## Table of contents
* [Theme hook suggestion to input (convert input to button)](#input-to-button)
* [Add sidebar classes to body](#sidebar-classes)
* [Add expanded class to menu items with depth](#menu-depth-classes)

<a name="input-to-button"></a>

## Theme hook suggestion to input (convert input to button)

For example you have "Add to cart" form from Drupal Commerce. Default "button" is `<input type="submit">`, but you want to  use `<button>` instead and add some icon, for example. Not a problem!

What you need to do, is just add to needed input attribute `data-hook-suggestion` with preferred suggestion and create template for it.

```php
/**
 * Implements hook_form_BASE_FORM_ID_alter().
 */
function MYMODULE_form_commerce_order_item_add_to_cart_form_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id) {
  $form['actions']['submit']['#attributes']['data-hook-suggestion'] = 'add-to-cart-button';
}
```

**input--submit--add-to-cart-button.html.twig**

```twig
<button{{ attributes }}>
  <span class="icon"></span>
  {{ 'Add to cart'|t }}
</button>
```

**Result**

```html
<button data-hook-suggestion="add-to-cart-button" data-drupal-selector="edit-submit" type="submit" id="edit-submit--2" name="op" value="Add to cart" class="button button--primary js-form-submit form-submit">
  <span class="icon"></span>
  Add to cart
</button>
```

<a name="sidebar-classes"></a>

## Add sidebar classes to <body>

Sometimes you need to add classes for sidebars in the body for managing your layout. This snippet helps you to do that by adding to `<body>` classes like `layout-sidebar-NAME`. This is only works with regions which starts with `sidebar_`.

Add this to your `includes/structure.inc`.

~~~php
/**
 * Implements hook_preprocess_HOOK() for HTML document templates.
 * Adds body classes if certain regions have content.
 */
function THEMENAME_preprocess_html(&$variables) {
  foreach ($variables['page'] as $element_key => $element) {
    if (preg_match("/sidebar_(.+)/", $element_key)) {
      $variables['attributes']['class'][] = 'is-layout-' . str_replace('_', '-', $element_key);
    }
  }
}
~~~

<a name="menu-depth-classes"></a>

## Add expanded class to menu items with depth

If you want to add class to `<li>` element with outher items, use one of this snippets.

### Only for first depth items

Add this to your `includes/menu.inc`.

~~~php
/**
 * Impelemnts hook_preprocess_HOOK().
 */
function THEMENAME_preprocess_menu__main(&$variables) {
  foreach ($variables['items'] as $k => &$v) {
    if (count($v['below']) > 0) {
      $v['attributes']->addClass('is-expanded');
    }
  }
}
~~~

## Create full pages

For example you need to add ability add pages without sidebars and for full width.

F.e. you have node entity, with page bundle, and it has field `field_page_is_fullpage` which is boolean with values 1 and 0.

Add this to your `includes/structure.inc`.

```php
/**
 * Implements hook_preprocess_html().
 */
function THEMENAME_preprocess_html(&$variables) {
  if ($node = \Drupal::routeMatch()->getParameter('node')) {
    // Page.
    if ($node->bundle() == 'page') {
      if ($node->field_page_is_fullpage->value === '1') {
        // Unset sidebars.
        foreach ($variables['page'] as $region_name => $region) {
          if (preg_match("/sidebar_(.+)/", $region_name)) {
            unset($variables['page'][$region_name]);
          }
        }

        $variables['attributes']['class'][] = 'is-fullpage';
      }
    }
  }
}
```

If you also use classes for sidebars from example above. Current code must be higher than sidebar classes. This will precent to add sidebar classes at all, so you don't need to clean them by yourself.

This will disable regions which name starts with `sidebar_`, so others will be working.
