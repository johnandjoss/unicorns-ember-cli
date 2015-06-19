import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
    	var number = this.get('number');
    	var gender = this.get('gender');
      this.transitionToRoute('user', number, gender);
    }
  }
});
