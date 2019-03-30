import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: '',
	/**
	 * img src
	 * @property imgSrc
	 * @type {string}
	 * @default '' // should be a loading img resoure
	 * @public
	 */
	imgSrc: 'https://i.loli.net/2019/03/30/5c9edd27e577e.png',
	/**
	 * app 名称
	 * @property name
	 * @type {string}
	 * @default ''
	 * @public
	 */
	name: '咚哒SaaS',
	/**
	 * app 属性
	 * @property property
	 * @type {string}
	 * @default ''
	 * @public
	 */
	property: '平台',
	/**
	 * 时间类型
	 * @property type
	 * @type {number}
	 * @default 0 // 授权时间
	 * @public
	 */
	timeType: 0,
	/**
	 * 时间戳
	 * @property type
	 * @type 时间戳
	 * @default 0 // 时间戳
	 * @public
	 */
	timestamp: '',
	/**
	 * app 授权/接入时间
	 * @property time
	 * @type {string}
	 * @default '' // 应该为计算属性,根据type(授权/接入),Timestamp来生成时间
	 * @private
	 */
	time: computed('timeType', 'timestamp', function () {
		let { timeType, timestamp } = this.getProperties('timeType', 'timestamp');

		let time = new Date(timestamp);
		// let { timeType } = this.getProperties('timeType');

		window.console.log(time.toLocaleDateString());
		
		if (timeType === 0) {
			return '授权时间' + time.toLocaleDateString();
		}
		return '接入时间' + time.toLocaleDateString();

	}),
});
