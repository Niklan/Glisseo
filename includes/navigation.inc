<?php

/**
 * @file
 * Custom preprocesses for navigations.
 */

/**
 * Implements hook_preprocess_HOOK() for menu-local-action.html.twig.
 */
function glisseo_preprocess_menu_local_action(array &$variables) {
  $classes = &$variables['link']['#options']['attributes']['class'];
  foreach ($classes as &$class) {
    if ($class == 'button-action') {
      $class = 'button--action';
    }
  }
  $classes[] = 'local-actions__link';
}

/**
 * Implements hook_preprocess_HOOK() for menu-local-task.html.twig.
 */
function glisseo_preprocess_menu_local_task(array &$variables) {
  $classes = &$variables['link']['#options']['attributes']['class'];
  $classes[] = 'tabs__menu-item-link';
}

/**
 * Implements hook_preprocess_HOOK() links.html.twig.
 */
function glisseo_preprocess_links(array &$variables) {
  $attributes = &$variables['attributes'];

  // Improve BEM block classes.
  foreach ($attributes['class'] as &$class) {
    if ($class == 'inline') {
      $class = 'links--inline';
    }
  }

  // Improve list item BEM classes.
  foreach ($variables['links'] as &$link) {
    /** @var \Drupal\Core\Template\Attribute $list_item_attributes */
    $list_item_attributes = &$link['attributes'];
    if (in_array('class', array_keys($list_item_attributes->toArray()))) {
      $list_item_classes = $list_item_attributes->toArray()['class'];

      foreach ($list_item_classes as $list_item_class) {
        $list_item_attributes->removeClass($list_item_class);
        $list_item_attributes->addClass('links__item');
        $list_item_attributes->addClass('links__item--' . $list_item_class);
      }
    }
  }

  // Improve list <a> BEM classes.
  foreach ($variables['links'] as &$link) {
    $link['link']['#options']['attributes']['class'][] = 'links__item-link';
  }
}
