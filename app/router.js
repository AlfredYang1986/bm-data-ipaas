import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('campus-overview', function() {
    this.route('ksf-diag', function() {
      this.route('headmaster');
      this.route('salemaster');
      this.route('educationmaster');
    });
  });
  this.route('dashboard');
  this.route('data-platform', function() {});
  this.route('growth-application', function() {});
  this.route('page-not-found');
});

export default Router;
