import ApplicationAdapter from './application'
import Ember from 'ember'

export default ApplicationAdapter.extend({
  queryRecord(store, type, query) {
    return Ember.$.getJSON("http://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/" + query).then( data => {
      let response = {
        Id: query,
        Data: data
      }
      return response
      // return store.createRecord('capitulosraiz-operacion', response)
    })
  }
})
