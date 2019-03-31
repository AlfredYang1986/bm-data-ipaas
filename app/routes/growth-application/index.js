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
			cycles: A([
				// {name:'本日',value: 0 },
				{ name: '本周', value: 1 },
				{ name: '本月', value: 2 },

			]),
			cycleWeek: A([
				{
					title: '各内容销售额占比', sales: 60919,
					circle: {
						data: A([
							{ value: 13246, name: '已分配' },
							{ value: 47721, name: '未分配' },
							{ value: 30535, name: 'other' },

						]),
						color: A(['#FFAB00', '#C4F790', '#31E0CF'])
					}
				},
				{
					title: '各内容收益占比', sales: 9875,
					circle: {
						data: A([
							{ value: 34770, name: '已分配' },
							{ value: 17121, name: '未分配' },
							{ value: 35444, name: 'other' },

						]),
						color: A(['#FFAB00', '#C4F790', '#31E0CF'])
					}
				},
				{
					title: '各渠道销售额占比', sales: 41847,
					circle: {
						data: A([
							{ value: 11942, name: '已分配' },
							{ value: 34396, name: '未分配' },
							{ value: 10904, name: 'other' },

						]),
						color: A(['#FFAB00', '#C4F790', '#31E0CF'])
					}
				},
				{
					title: '各渠道收益占比', sales: 17284, circle: {
						data: A([
							{ value: 47764, name: '已分配' },
							{ value: 21794, name: '未分配' },
							{ value: 2968, name: 'other' },

						]),
						color: A(['#FFAB00', '#C4F790', '#31E0CF'])
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
							name: '课程',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [43386, 42230, 54277, 14139, 34132, 6399, 10148]
						},
						{
							name: '服务',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [41608, 7418, 51580, 63496, 18245, 19492, 40845]
						},
						{
							name: '商品',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [851, 42307, 10816, 14535, 17281, 36539, 14479]
						}],
					}
				},
				{
					title: '各渠道收益额', line: {
						lineData: [{
							name: '课程',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [41418, 57579, 6456, 26351, 33447, 64254, 42489]
						},
						{
							name: '服务',
							date: ['3/25', '3/26', '3/27', '3/28', '3/29',
								'3/30', '3/31'],
							data: [58074, 6925, 25652, 6291, 23517, 55024, 22580]
						},
						{
							name: '商品',
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
					name: '龙民节小教具', type: 0, price: 200,
					lowestPrice: 180, salesVolume: 56003, divided: 27168,
					income: 7419, operating: 1
				}, {
					name: '龙民节小教具', type: 0, price: 200,
					lowestPrice: 180, salesVolume: 51583, divided: 25265,
					income: 6478, operating: 1
				}, {
					name: '龙民节小教具', type: 0, price: 200,
					lowestPrice: 180, salesVolume: 62671, divided: 2809,
					income: 19020, operating: 1
				}
			]),
			distributionChannels: A([
				{
					name: 'BM', type: 0, level: '一级',
					purchase: 180, order: 4000, money: 7495,
					income: 758800
				},
				{
					name: 'BM', type: 0, level: '一级',
					purchase: 180, order: 4000, money: 44308,
					income: 758800
				},
				{
					name: 'BM', type: 0, level: '一级',
					purchase: 180, order: 4000, money: 13807,
					income: 758800
				},
			])

		})
	}
});
