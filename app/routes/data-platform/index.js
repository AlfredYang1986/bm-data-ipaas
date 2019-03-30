import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
	model() {
		return hash({
			apps: [
				{ name: '', property: '', timeType: 0, imgSrc: '', },
			]
		})
	}

});
