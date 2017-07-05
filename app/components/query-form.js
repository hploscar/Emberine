import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select(data) {
      this.sendAction('select', data)
    }
  }
});
