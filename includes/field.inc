<?php

/**
 * @file
 * Theme and preprocess functions for fields.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function glisseo_preprocess_field(&$variables) {
  $element = $variables['element'];

  $variables['bundle'] = $element['#bundle'];
  $variables['view_mode'] = $element['#view_mode'];

  // Fix for block view mode. Block template by default has 'full' view mode,
  // but inside it field will get default, this will break BEM model and we fix
  // it.
  if ($variables['entity_type'] == 'block_content' && $variables['view_mode'] == 'default') {
    $variables['view_mode'] = 'full';
  }

  // Sometimes view_mode can be missed and we set it to default.
  // e.g. paragraphs_library_item entity.
  if (strlen($variables['view_mode']) == 0) {
    $variables['view_mode'] = 'default';
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 *
 * Adds new theme suggestions for fields.
 *  - field--{ENTITY}--{BUNDLE}--{FIELD_NAME}--{ENTITY_ID}.html.twig
 *  - field--{ENTITY}--{BUNDLE}--{FIELD_NAME}--{VIEW_MODE}.html.twig
 */
function glisseo_theme_suggestions_field_alter(array &$suggestions, array $variables) {
  $entity = $variables['element']['#object'];
  $suggestion_name = [
    'field',
    $variables['element']['#entity_type'],
    $variables['element']['#bundle'],
    $variables['element']['#field_name'],
    $variables['element']['#view_mode'],
  ];
  $suggestions[] = implode('__', $suggestion_name);

  $suggestion_name = [
    'field',
    $variables['element']['#entity_type'],
    $variables['element']['#bundle'],
    $variables['element']['#field_name'],
    $entity->id(),
  ];
  $suggestions[] = implode('__', $suggestion_name);
}
