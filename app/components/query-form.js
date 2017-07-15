import Ember from 'ember';

export default Ember.Component.extend({
  showButton: false,
  table: "",
  actions: {
    select(data) {
      this.sendAction('select', data)
    },
    selectCapitulo(id) {
      this.sendAction('selectCapitulo', id)
    },
    showButton(id) {
      this.set('table', id)
      this.set('showButton', true)
    },
    loadDataTable() {
      this.sendAction('loadDataTable', this.get('table'))
    }
  }
});
