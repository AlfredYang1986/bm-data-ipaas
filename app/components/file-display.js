import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: '',
	/**
	 * fileType
	 * @property fileType
	 * @type {string}
	 * @default '' 
	 * @public
	 */
	fileType: 'unknown',
	/**
	 * img src
	 * @property imgSrc
	 * @type {string}
	 * @default '' // should be a loading img resoure
	 * @public
	 */
	// imgSrc: 'https://i.loli.net/2019/03/30/5c9edd27e577e.png',
	imgSrc: computed('fileType', function () {
		let { fileType } = this.getProperties('fileType');

		if (fileType === "doc") {
			return "/images/icon_document_medium@3x.png"
		} else if (fileType === "pdf") {
			return "/images/icon_pdf_medium@3x@3x.png"
		} else if (fileType === "excel") {
			return "/images/icon_excel_medium@3x.png"
		} else {
			return "/images/icon_generic_medium@3x.png"
		}
	}),
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
