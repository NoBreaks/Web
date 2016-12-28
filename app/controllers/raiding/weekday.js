import Ember from 'ember';

export default Ember.Controller.extend({
  tabsSelection: 'raiding.weekday.roster',

  tabChange: function() {
    this.transitionToRoute(this.tabsSelection);
  }.observes('tabsSelection')
});
