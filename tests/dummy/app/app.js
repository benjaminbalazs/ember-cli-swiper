import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

<<<<<<< HEAD
let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

const { Application } = Ember;

App = Application.extend({
=======
const App = Application.extend({
>>>>>>> de89ee7... message
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
