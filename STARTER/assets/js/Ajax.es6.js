/**
 * @file
 * Ajax theme overrides.
 */
((Drupal) => {

  /**
   * Theme override of the ajax progress indicator for full screen.
   *
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressIndicatorFullscreen = () =>
    '<div class="ajax-progress ajax-progress--fullscreen"><div class="ajax-progress__throbber ajax-progress__throbber--fullscreen">&nbsp;</div></div>';

  /**
   * Theme override of the ajax progress indicator.
   *
   * @param {string} message
   *   The message shown on the UI.
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressThrobber = (message) => {
    // Build markup without adding extra white space since it affects rendering.
    const messageMarkup =
      typeof message === 'string'
        ? Drupal.theme('ajaxProgressMessage', message)
        : '';
    const throbber = '<div class="ajax-progress__throbber">&nbsp;</div>';

    return `<div class="ajax-progress ajax-progress--throbber">${throbber}${messageMarkup}</div>`;
  };

  /**
   * Theme override of the ajax progress message.
   *
   * @param {string} message
   *   The message shown on the UI.
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressMessage = (message) =>
    `<div class="ajax-progress__message">${message}</div>`;

  /**
   * Sets the throbber progress indicator inside clicked element.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    let template = document.createElement('template');
    template.innerHTML = Drupal.theme('ajaxProgressThrobber', this.progress.message);
    this.progress.element = template.content.firstChild;
    let noNestedElements = ['INPUT'];
    // Do not insert element inside elements that can't have children like
    // <input/>. Insert right before them.
    if (noNestedElements.includes(this.element.tagName)) {
      this.element.parentNode.insertBefore(this.progress.element, this.element.nextSibling);
      this.element.parentNode.classList.add('is-ajax-loading');
    }
    else {
      this.element.appendChild(this.progress.element);
      this.element.classList.add('is-ajax-loading');
    }
  };

  /**
   * Save the original callback to avoid copy-pasting.
   */
  const originalSuccessCallback = Drupal.Ajax.prototype.success;

  /**
   * Extends default success callback to remove extra class.
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    originalSuccessCallback.call(this, response, status);
    this.element.classList.remove('is-ajax-loading');
    this.element.parentNode.classList.remove('is-ajax-loading');
  }

  /**
   * Save the original callback to avoid copy-pasting.
   */
  const originalErrorCallback = Drupal.Ajax.prototype.error;

  /**
   * Extends default success callback to remove extra class.
   */
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    originalErrorCallback.call(this, xmlhttprequest, uri, customMessage);
    this.element.classList.remove('is-ajax-loading');
    this.element.parentNode.classList.remove('is-ajax-loading');
  }

})(Drupal);
