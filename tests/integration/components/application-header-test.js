import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | application-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders text', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ApplicationHeader
                        @text='My Title'/>`);

    assert.dom('[data-test-header-text]').exists();
    assert.dom('[data-test-header-text]').hasText('My Title');
  });

  test('it renders image', async function (assert) {
    await render(hbs`<ApplicationHeader
                        @src='../assets/ember-trivia-logo.png'
                        @alt='Ember Trivia Logo'/>`);

    assert.dom('[data-test-header-img]').exists();
    assert.dom('[data-test-header-img]').hasAttribute('src');
    assert.dom('[data-test-header-img]').hasAttribute('alt');
  });
});
