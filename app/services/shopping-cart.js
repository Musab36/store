import Ember from 'ember';

export default Ember.Service.extend({
	items: [], //We create an array called items to hold the list of items in our cart.
	add(item) { //we write an action called .add() that accepts an argument, item, to add to our cart.
		this.get('items').pushObject(item); //This action pushes the new item into our service's items array using the pushObject() method.
	}
});
