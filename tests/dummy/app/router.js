import EmberRouter from '@ember/routing/router';
import config from './config/environment';

<<<<<<< HEAD
const { Router: ERouter } = Ember;

const Router = ERouter.extend({
=======
const Router = EmberRouter.extend({
>>>>>>> de89ee7... message
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
});

export default Router;
