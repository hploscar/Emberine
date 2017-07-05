import Ember from 'ember';

export default Ember.Controller.extend({
  queryFormVisible: false,
  operation: "",
  capitulos: [],
  actions: {
    toggleQueryFormVisibility() {
      this.toggleProperty('queryFormVisible')
    },
    selectSeries(serie) {
      let self = this
      this.get('store').queryRecord('capitulosraiz-operacion', serie ).then(operacion => {
        self.get('store').queryRecord('capitulos', operacion.get('Operation')).then(capitulos => {
          self.set('capitulos', capitulos.get('data'))
        })
        // self.set('operation', operacion.get('Nombre'))
      })
    }
  }
});
