import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    delete: function(){
      if(confirm("are you sure?")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },
    save: function() {
      var question = this.get('model');
      var answer = this.store.createRecord('answer', {
        text: this.get('text')
      });

      answer.save().then(function(){
        question.get('answers').pushObject(answer);
        question.save();
      });

      this.transitionToRoute('question', question.id);
    }
  }
});
