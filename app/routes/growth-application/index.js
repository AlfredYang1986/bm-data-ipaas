import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { A } from '@ember/array';

export default Route.extend({
	init() {
		this._super(...arguments);
		this.set('tmpCycle', {
			name: '本周',
			value: 1
		})
	},
	model() {

		return hash({
			cycleWeek: A([
				{
					title: '各内容销售额占比', sales: '60,919',
					circle: {
						data: A([
							{ value: 13246, name: '服务' },
							{ value: 47721, name: '商品' },
							{ value: 30535, name: '课程' },

						]),
						color: A(['#79e2f2', '#998dd9', '#79f2c0'])
					}
				},
				{
					title: '各内容收益占比', sales: '9,875',
					circle: {
						data: A([
							{ value: 34770, name: '服务' },
							{ value: 17121, name: '商品' },
							{ value: 35444, name: '课程' },

						]),
						color: A(['#79e2f2', '#998dd9', '#79f2c0'])
					}
				},
				{
					title: '各渠道销售额占比', sales: '41,847',
					circle: {
						data: A([
							{ value: 11942, name: 'SaaS平台' },
							{ value: 34396, name: '小程序' },
							{ value: 10904, name: '其他' },

						]),
						color: A(['#79e2f2', '#998dd9', '#79f2c0'])
					}
				},
				{
					title: '各渠道收益占比', sales: '17,284', 
					circle: {
						data: A([
							{ value: 47764, name: 'SaaS平台' },
							{ value: 21794, name: '小程序' },
							{ value: 2968, name: '其他' },

						]),
						color: A(['#79e2f2', '#998dd9', '#79f2c0'])
					}
				},
			]),
			cycleMonth: A([
				{
					title: '各内容销售额', line: {
						lineData: [{
							name: '课程',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [37469, 15305, 19200, 49290, 34220, 37802, 45105]
						},
						{
							name: '服务',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [41039, 32973, 25199, 7293, 31485, 43998, 15996]
						},
						{
							name: '商品',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [40885, 3382, 55388, 51532, 2211, 20988, 26081]
						}],
					}
				},
				{
					title: '各内容收益额', line: {
						lineData: [{
							name: '课程',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [12203, 53586, 56520, 44952, 9125, 45135, 27174]
						},
						{
							name: '服务',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [8358, 14630, 13685, 44137, 40948, 59039, 25801]
						},
						{
							name: '商品',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [19915, 3096, 33850, 53563, 42842, 19157, 3081]
						}],
					}
				},
				{
					title: '各渠道销售额', line: {
						lineData: [{
							name: 'SaaS平台',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [43386, 42230, 54277, 14139, 34132, 6399, 10148]
						},
						{
							name: '小程序',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [41608, 7418, 51580, 63496, 18245, 19492, 40845]
						},
						{
							name: '其他',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [851, 42307, 10816, 14535, 17281, 36539, 14479]
						}],
					}
				},
				{
					title: '各渠道收益额', line: {
						lineData: [{
							name: 'SaaS平台',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [41418, 57579, 6456, 26351, 33447, 64254, 42489]
						},
						{
							name: '小程序',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [58074, 6925, 25652, 6291, 23517, 55024, 22580]
						},
						{
							name: '其他',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [52238, 44886, 1494, 359, 11554, 42378, 31895]
						}],
					}
				}
			]),
			lineColor: ['#57D9A3', '#79E2F2', '#8777D9 '],
			legendPosition: {
				bottom: 0,
				right: '',
				left: 'center',
				top: ''
			},
			distributionContents: A([
				{
					name: '龙民节小教具', type: '商品', price: 200,
					lowestPrice: 180, salesVolume: 56003, divided: 27168,
					income: 7419, operating: 1
				}, {
					name: '龙民节课程(次卡)', type: '课程', price: 500,
					lowestPrice: 400, salesVolume: 51583, divided: 25265,
					income: 6478, operating: 1
				}, {
					name: '龙民节(全程陪同体验)', type: '服务', price: 300,
					lowestPrice: 150, salesVolume: 62671, divided: 2809,
					income: 19020, operating: 1
				}
			]),
			distributionChannels: A([
				{
					name: 'SaaS平台', type: 'SaaS平台', level: '一级',
					purchase: 180, order: 400, money: 7495,
					income: 248800
				},
				{
					name: '小程序', type: '小程序', level: '一级',
					purchase: 380, order: 500, money: 44308,
					income: 484800
				},
				{
					name: '小鹅通', type: '其他', level: '一级',
					purchase: 60, order: 100, money: 13807,
					income: 58800
				},
			])

		})
	}
});
