import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | campus-overview/ksf-diag/salemaster', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:campus-overview/ksf-diag/salemaster');
    assert.ok(route);
  });
});
