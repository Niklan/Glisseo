<?php

/**
 * @file
 * Custom preprocesses for navigations.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function glisseo_preprocess_menu_local_action(&$variables) {
  $classes = &$variables['link']['#options']['attributes']['class'];
  foreach ($classes as &$class) {
    if ($class == 'button-action') {
      $class = 'button--action';
    }
  }
  $classes[] = 'local-actions__link';
}
