import Route from '@ember/routing/route';
import {A} from '@ember/array';

export default Route.extend({
    model() {
        return {
            goal: A([{
                rate: 50,
                name: '消课率',
                circleColor: A(['#3172E0', '#F4F5F7']),
                circleData:A([
                    { value: 0.5, name: '已消课' },
                    { value: 0.5, name: '未消课' }
                ])
            },{
                rate: 10,
                name: '续费率',
                circleColor: A(['#FFAB00', '#F4F5F7']),
                circleData:A([
                    { value: 0.1, name: '已续费' },
                    { value: 0.9, name: '未续费' }
                ])
            },{
                rate: 25,
                name: '签单率',
                circleColor: A(['#57D9A3', '#F4F5F7']),
                circleData:A([
                    { value: 0.25, name: '已签单' },
                    { value: 0.75, name: '未签单' }
                ])
            }]),
            behavior: A([{
                rate: 20,
                name: '覆盖率',
                unit: '%',
            },{
                rate: 100,
                name: '反馈次数',
                unit: '次'
            },{
                rate: 20,
                name: '及时率',
                unit: '%'
            },{
                rate: 20,
                name: '准确率',
                unit: '%'
            }
            ]),
        }
    }

});
