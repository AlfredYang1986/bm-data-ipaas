import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	name: faker.internet.userName,
	property: faker.random.word,
	imgsrc: faker.image.avatar,
	time: faker.date.past,
});
