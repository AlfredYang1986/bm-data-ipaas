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
					title: '各内容销售额占比', sales: '3683120',
					circle: {
						data: A([
							{ value: 842100, name: '商品' },
							{ value: 2120000, name: '课程' },
							{ value: 721020, name: '服务' },

						]),
						color: A(['#79e2f2', '#998dd9', '#79f2c0'])
					}
				},
				{
					title: '各内容收益占比', sales: '3142300',
					circle: {
						data: A([
							{ value: 720200, name: '商品' },
							{ value: 1820000, name: '课程' },
							{ value: 602100, name: '服务' },

						]),
						color: A(['#79e2f2', '#998dd9', '#79f2c0'])
					}
				},
				{
					title: '各渠道销售额占比', sales: '3683120',
					circle: {
						data: A([
							{ value: 2315000, name: '校长星球' },
							{ value: 552010, name: '小程序' },
							{ value: 816110, name: '百造门店' },

						]),
						color: A(['#79e2f2', '#998dd9', '#79f2c0'])
					}
				},
				{
					title: '各渠道收益占比', sales: '3142300',
					circle: {
						data: A([
							{ value: 1916220, name: '校长星球' },
							{ value: 484800, name: '小程序' },
							{ value: 741280, name: '百造门店' },

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
					name: '诸葛连弩 套装', type: '商品', price: 88,
					lowestPrice: 68, salesVolume: 3718, divided: 51290,
					income: 238714, operating: 1
				}, {
					name: '《牛顿与达芬奇》课程3年授权', type: '课程', price: 40000,
					lowestPrice: 32000, salesVolume: 15, divided: 124200,
					income: 400800, operating: 1
				}, {
					name: '开业活动总部支持', type: '服务', price: 12000,
					lowestPrice: 11000, salesVolume: 12, divided: 10000,
					income: 134000, operating: 1
				}
			]),
			distributionChannels: A([
				{
					name: '校长星球', type: '加盟渠道商', level: '一级',
					purchase: 18, order: 40, money: 2315000,
					income: 1916200
				},
				{
					name: '小程序', type: '小程序', level: '一级',
					purchase: 380, order: 500, money: 44308,
					income: 484800
				},
				{
					name: '百造门店', type: '所有店面总额', level: '一级',
					purchase: 720, order: 1290, money: 162300,
					income: 741280
				},
			])

		})
	}
});
