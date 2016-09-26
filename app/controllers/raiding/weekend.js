import Ember from 'ember';

export default Ember.Controller.extend({
  tabsSelection: 'raiding.weekend.roster',

  tabChange: function() {
    console.log('tabChange', this.tabsSelection);
    this.transitionToRoute(this.tabsSelection);
  }.observes('tabsSelection')
});
