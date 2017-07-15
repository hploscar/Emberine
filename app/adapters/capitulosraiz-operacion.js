import DS from 'ember-data'
import Ember from 'ember'

export default DS.JSONAPIAdapter.extend({
  queryRecord(store, type, query) {
    return Ember.$.getJSON("http://servicios.ine.es/wstempus/js/ES/CAPITULOSRAIZ_OPERACION/" + query).then( data => {
      let response = {
        Codigo: data[0].Codigo,
        Descripcion: data[0].Descripcion,
        Nombre: data[0].Nombre,
        Id: query,
        Operation: data[0].Id
      }
      return response
      // return store.createRecord('capitulosraiz-operacion', response)
    })
  }
})
