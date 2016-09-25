import Ember from 'ember';

export default Ember.Controller.extend({
  tabsSelection: 'raiding.weekend.roster',
  lootDate: 'latest',

  tabChange: function() {
    if (this.tabsSelection === 'raiding.weekend.loot') {
      this.transitionToRoute(this.tabsSelection, this.get('lootDate'));
    } else {
      this.transitionToRoute(this.tabsSelection);
    }
  }.observes('tabsSelection')
});
