import DS from 'ember-data';
import Ember from 'ember';
export default DS.JSONAPIAdapter.extend({
  host: 'http://servicios.ine.es',
  namespace: 'wstempus/js/ES',
  pathForType: (type) => {
    return Ember.String.underscore(type)
  }
});
