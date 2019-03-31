import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | campus-overview/ksf-diag', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:campus-overview/ksf-diag');
    assert.ok(route);
  });
});
