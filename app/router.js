import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('campus-overview');
  this.route('dashboard');
  this.route('data-platform', function() {});
  this.route('growth-application', function() {});
});

export default Router;
