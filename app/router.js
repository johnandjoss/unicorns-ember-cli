import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: '/:question_id'}, function(){
    this.resource('new-answer');
    this.resource('answer', {path: '/:answer_id'});
  });
  this.resource('new-question');
  this.resource('users', function(){
      this.resource('user', {path: 'user/:number/:gender'});
	});
});

export default Router;
