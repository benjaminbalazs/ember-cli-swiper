import { run } from '@ember/runloop';
import { merge } from '@ember/polyfills';
import Application from '../../app';
import config from '../../config/environment';

export default function startApp(attrs) {
  let application;

  // jscs:disable disallowDirectPropertyAccess
  let attributes = merge({}, config.APP);

  // jscs:disable disallowDirectPropertyAccess
  attributes = merge(attributes, attrs); // use defaults, but you can override;

  // jscs:disable disallowDirectPropertyAccess
  run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
