import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	// tagName: '',
	classNames: ['member-list-item'],
	attributeBindings: ['style'],
    style: computed('active', function(){
		let { active } = this.getProperties('active');
		if (active === true) {
			return 'background-color: #f5f6f8';
		} else {
			return "";
		}
    }),

    /**
	 * 名称
	 * @property name
	 * @type {string}
	 * @default ''
	 * @public
	 */
    name: '姓名',
    /**
	 * 性别 num
	 * @property sex
	 * @type {number}
	 * @default 0
	 * @public
	 */
    sex: 0,
    /**
	 * 联系方式
	 * @property contact
	 * @type {string}
	 * @default ''
	 * @public
	 */
    contact: '联系方式',
    /**
	 * 职位
	 * @property jobCode
	 * @type {number}
	 * @default 0
	 * @public
	 */
    jobCode: 0,
    /**
	 * 职业名称
	 * @property jobName
	 * @type {string}
	 * @default ''
	 * @public
	 */
    jobName: computed('jobCode', function () {
		let { jobCode } = this.getProperties('jobCode');

		if (jobCode === 0) {
			return "校长"
		} else if (jobCode === 1) {
			return "销售主管"
		} else if (jobCode === 2) {
			return "教务经理"
		} else {
			return "团队成员"
		}
    }),
    /**
	 * 性别
	 * @property sexType
	 * @type {string}
	 * @default ''
	 * @public
	 */
    sexType: computed('sex', function () {
		let { sex } = this.getProperties('sex');

		if (sex === 1) {
			return "男"
		} else if (sex === 0) {
			return "女"
		} else {
			return "未知"
		}
    }),
    /**
	 * img src
	 * @property imgSrc
	 * @type {string}
	 * @default '' // should be a loading img resoure
	 * @public
	 */
	imgSrc: '',
	/**
	 * img src
	 * @property active
	 * @type {boolean}
	 * @default false
	 * @public
	 */
    active: false,

    /**
	 * @property memberOnclick
	 * @type function
	 * @default null
	 * @public
	 */
	memberOnclick() {
    },
    

    actions: {
        onItemClick () {
            this.get('memberOnclick')();
        }
    },
});
