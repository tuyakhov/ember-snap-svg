import Ember from 'ember';
import layout from '../templates/components/snap-svg';
import Snap from 'snap-svg';

const {set, $} = Ember;

export default Ember.Component.extend({
  layout,
  didInsertElement() {
    this._super(...arguments);
    if (window && $) {
      set(this, 'snap', new Snap($('svg').get()));
    }
  }
});
