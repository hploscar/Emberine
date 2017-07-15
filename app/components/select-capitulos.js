import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    selectCapitulo(id) {
      this.sendAction('selectCapitulo', id)
    }
  }
});
