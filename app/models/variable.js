import DS from 'ember-data';

export default DS.Model.extend({
  Nombre: DS.attr('string'),
  Codigo: DS.attr('string')
});
