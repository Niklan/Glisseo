<?php

/**
 * @file
 * Theme and preprocess functions for page, html, etc.
 */

use Drupal\Core\Template\Attribute;

/**
 * Implements hook_preprocess_HOOK() for page.html.twig.
 */
function glisseo_preprocess_page(array &$variables) {
  // Adds empty Attribute object for main element.
  $main_layout_attributes = new Attribute();
  $variables['main_layout_attributes'] = $main_layout_attributes;
}
