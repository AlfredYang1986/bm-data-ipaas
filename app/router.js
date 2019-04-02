import EmberRouter from '@ember/routing/router';
import Route from '@ember/routing/route'
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Route.reopen({
  withLayout: true,
  setupController() {
      this._super(...arguments);
      this.controllerFor('application').set('layout', this.get('withLayout'));
  }
})

Router.map(function() {
  this.route('campus-overview', function() {
    this.route('ksf-diag', function() {
      this.route('salemaster');
      this.route('educationmaster');
    });
  });
  this.route('dashboard');
  this.route('data-platform', function() {});
  this.route('growth-application', function() {});
  this.route('page-not-found');
  this.route('study-progress');
});

export default Router;
