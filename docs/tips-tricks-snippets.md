# Tips, tricks and snippets

## Table of contents
* [Theme hook suggestion to input (convert input to button)](#input-to-button)

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
<button data-hook-suggestion="add-to-cart-button" data-drupal-selector="edit-submit" type="submit" id="edit-submit--2" name="op" value="Add to cart" class="button button--primary js-form-submit form-submit add-to-cart-button">
  <span class="add-to-cart-button__icon"></span>
  Add to cart
</button>
```
