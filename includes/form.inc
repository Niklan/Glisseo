<?php

/**
 * @file
 * Form specific hooks.
 */

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 *
 * Adds ability to customize inputs hook suggestions. Very useful to add it to
 * input of "Add to cart" and create button from it.
 */
function glisseo_theme_suggestions_input_alter(array &$suggestions, array $variables) {
  $element = &$variables['element'];

  if (isset($element['#attributes']['data-hook-suggestion'])) {
    $suggestion = str_replace('-', '_', $element['#attributes']['data-hook-suggestion']);
    $suggestions[] = 'input__' . $element['#type'] . '__' . $suggestion;
  }
}
