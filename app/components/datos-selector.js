import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let self = this
    Ember.$('.ui.dropdown').dropdown({
      onChange: function(value, text, $selectedItem) {
        self.sendAction('loadChart', value, text, $selectedItem)
      }
    })
  }
});
