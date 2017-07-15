import DS from 'ember-data'
import Ember from 'ember'

export default DS.JSONAPIAdapter.extend({
  queryRecord(store, type, query) {
    return Ember.$.getJSON("http://servicios.ine.es/wstempus/js/ES/TABLAS_CAPITULO/" + query).then( data => {
      let response = {
        Id: query,
        Data: data
      }
      return response
      // return store.createRecord('capitulosraiz-operacion', response)
    })
  }
})
