import DS from 'ember-data';

export default DS.Model.extend({
  Id: DS.attr('string'),
  Data: DS.attr()
});
