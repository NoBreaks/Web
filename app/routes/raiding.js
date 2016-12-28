import Ember from 'ember';
//import fetch from 'ember-network/fetch';
//import { API_PATH, API_MEMBERS_PATH } from '../const';

export default Ember.Route.extend({
  transitionTarget: '',

  activate: function() {
    Ember.run.scheduleOnce('afterRender', this, () => {
      Ember.$('.pin-container').pushpin({ top: Ember.$('.pin-container').offset().top - 64 });
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
