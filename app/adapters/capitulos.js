import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  queryRecord(store, type, query) {
    return Ember.$.getJSON("http://servicios.ine.es/wstempus/js/ES/CAPITULOS/" + query).then( data => {
      let response = {
        Id: query,
        Data: data
      }
      return response
    })
  }
});
