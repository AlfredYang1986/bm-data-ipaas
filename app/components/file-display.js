import Component from '@ember/component';

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
	 * file 名称
	 * @property name
	 * @type {string}
	 * @default ''
	 * @public
	 */
	name: '文件名称',
	/**
	 * file 大小
	 * @property size
	 * @type {string}
	 * @default ''
	 * @public
	 */
	size: '500kb',
	/**
	 * file 上传时间
	 * @property time
	 * @type {string}
	 * @default ''
	 * @public
	 */
	time: '2019/08/08'
});
