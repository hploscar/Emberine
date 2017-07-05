import DS from 'ember-data';

export default DS.Model.extend({
  Id: DS.attr('string'),
  Data: DS.attr(),
  Codigo: DS.attr('string'),
  Descripcion: DS.attr('string'),
  Nombre: DS.attr('string'),
  Operation: DS.attr('string')
});
