import DS from 'ember-data';

export default DS.Model.extend({
  Id:      DS.attr('string'),
  Cod_IOE: DS.attr('string'),
  Nombre:  DS.attr('string'),
  Codigo:  DS.attr('string')
});
