import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  classNameBindings: ['isBroken:broken'],

  isBroken: false,

  didInsertElement: function() {
    this.$().on('error', function() {
      this.set('isBroken', true);
      this.$().attr('src', this.alt);
    }.bind(this));
  },

  willDestroyElement: function(){
    this.$().off();
  }
});
