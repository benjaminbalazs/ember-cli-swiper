import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/swiper-slide';

export default Component.extend({
  layout,
  classNameBindings: ['mergedClasses'],

  mergedClasses: computed('class', function() {
    return this.get('class') ? `${this.get('class')} swiper-slide` : 'swiper-slide';
  })

});
