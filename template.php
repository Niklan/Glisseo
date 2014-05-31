<?php
/**
 * @file
 * Main hooks for base theme.
 */

/**
 * Auto rebuild theme registry.
 */
if (theme_get_setting('glisseo_rebuild_registry') && !defined('MAINTENANCE_MODE')) {
  system_rebuild_theme_data();
  drupal_theme_rebuild();
}

/**
 * Implements template_preprocess_html().
 */
function glisseo_preprocess_html(&$variables) {
  //dpm($variables);

  // HTML Attributes
  $html_attributes = array(
    'lang' => $variables['language']->language,
    'dir' => $variables['language']->dir,
  );

  $variables['html_attributes'] = drupal_attributes($html_attributes);

  // RDF namespaces.
  if ($variables['rdf_namespaces']) {
    $prefixes = array();
    foreach (explode("\n  ", ltrim($variables['rdf_namespaces'])) as $namespace) {
      $prefixes[] = str_replace('="', ': ', substr($namespace, 6, -1));
    }
    $variables['rdf_namespaces'] = ' prefix="' . implode(' ', $prefixes) . '"';
  }
}

/**
 * Implements hook_preprocess_block().
 */
function glisseo_preprocess_block(&$variables, $hook) {
  $variables['title'] = isset($variables['block']->subject) ? $variables['block']->subject : '';
}