import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({

  model() {
    return fetch('/data/weekday-progress.json')
      .then((response) => { return response.json(); });
  }
});