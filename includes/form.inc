<?php

/**
 * @file
 * Form specific hooks.
 */

use Drupal\Core\Form\FormStateInterface;

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

/**
 * Implements hook_preprocess_HOOK().
 */
function glisseo_preprocess_details(&$variables) {
  $element = &$variables['element'];

  $variables['form_id'] = isset($element['#bem_form_id']) ? $element['#bem_form_id'] : '';
  $variables['name'] = isset($element['#id']) ? preg_replace([
    '/^edit\-/',
    '/\-\d+$/',
  ], '', $element['#id']) : '';
}

/**
 * Implements hook_preprocess_HOOK().
 */
function glisseo_preprocess_form_element(&$variables) {
  $element = &$variables['element'];

  $variables['form_id'] = isset($element['#bem_form_id']) ? $element['#bem_form_id'] : '';
}

/**
 * Implements hook_element_info_alter().
 *
 * Add additional processing for some elements.
 */
function glisseo_element_info_alter(array &$types) {
  foreach ($types as $name => $type) {
    if (isset($type['#theme_wrappers']) && in_array('form_element', $type['#theme_wrappers'])) {
      $types[$name]['#process'][] = '_glisseo_process_form_element';
    }
    if (isset($type['#theme_wrappers']) && in_array('details', $type['#theme_wrappers'])) {
      $types[$name]['#process'][] = '_glisseo_process_form_element';
    }
    if (isset($type['#theme_wrappers']) && in_array('fieldset', $type['#theme_wrappers'])) {
      $types[$name]['#process'][] = '_glisseo_process_form_element';
    }
  }
}

/**
 * Additional processing for specific form elements.
 */
function _glisseo_process_form_element(&$element, FormStateInterface $form_state, &$complete_form) {
  if (!empty($complete_form['#form_id'])) {
    // Add additional variable to element to determine parent form id.
    $element['#bem_form_id'] = $complete_form['#form_id'];
  }
  return $element;
}

/**
 * Implements hook_preprocess_HOOK().
 */
function glisseo_preprocess_form(&$variables) {
  $element = &$variables['element'];
  $variables['form_id'] = $element['#form_id'];
}
