import Ember from 'ember';
//import fetch from 'ember-network/fetch';
//import { API_PATH, API_MEMBERS_PATH } from '../const';

export default Ember.Route.extend({
  transitionTarget: '',

  activate: function() {
    Ember.run.scheduleOnce('afterRender', this, () => {
      console.log('afterRender');

      $('.pin-container').pushpin({ top: $('.pin-container').offset().top + 50 });
    });
  },

  model() {
  },

  actions: {
    error(reason) {
      alert(reason); // "FAIL"
    }
  },

  redirect(model, transition) {
    let target = (transition.targetName !== 'raiding.index') ?
      transition.targetName : 'raiding.index';
    this.set('transitionTarget', target);
    this.transitionTo(target);
  }
});
