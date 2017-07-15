import Ember from 'ember';

export default Ember.Component.extend({
  showButton: false,
  table: "",
  loading: false,
  capitulosUpdate: Ember.observer('capitulos', function(sender, key, value, rev) {
    this.toggleProperty('loading')
  }),
  actions: {
    select(data) {
      this.toggleProperty('loading')
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
