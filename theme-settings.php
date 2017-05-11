<?php

/**
 * @file
 * Custom theme settings.
 */

function glisseo_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }

  $form['region_settings'] = [
    '#type' => 'fieldset',
    '#title' => t('Region settings'),
  ];

  $form['region_settings']['glisseo_sidebars_add_classes'] = [
    '#type' => 'checkbox',
    '#title' => t('Add classes with sidebar names to <body> element'),
    '#description' => t('Any sidebar_* region rendered on the page will be added as class layout-sidebar-NAME.'),
    '#default_value' => theme_get_setting('glisseo_sidebars_add_classes'),
  ];
}