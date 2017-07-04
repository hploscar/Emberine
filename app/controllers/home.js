import Ember from 'ember';

export default Ember.Controller.extend({
  operation: "",
  actions: {
    select(data) {
      let self = this
      this.get('store').queryRecord('capitulosraiz-operacion', data ).then(operacion => {
        console.log(operacion)
        // self.set('operation', operacion.Nombre)
      })
    }
  }
});
