import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  timestamp: DS.attr('number'),
  question: DS.belongsTo('question', {async: true})
});
