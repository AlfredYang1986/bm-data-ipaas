import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | study-progress', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:study-progress');
    assert.ok(controller);
  });
});
