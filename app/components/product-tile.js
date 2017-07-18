import Ember from 'ember';

export default Ember.Component.extend({
	shoppingCart: Ember.inject.service(), //When we inject our service, we use the camelCase version of the file name shopping-cart

	actions: {
		addToCart(item) {
			this.get('shoppingCart').add(item);
		}
	}
});
