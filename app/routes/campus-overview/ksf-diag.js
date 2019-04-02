import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
    // model() {
    //     return {
    //         memberList: A([
    //             {id: '4', name: '藏德防', sex: 1, icon:'/images/img_app_00.png', contact: '18842569864', jobCode: 0},
    //             {id: '5', name: '莎莎', sex: 0, icon:'/images/img_app_00.png', contact: '18842569865', jobCode: 1},
    //             {id: '6', name: '姚非', sex: 0, icon:'/images/img_app_00.png', contact: '18842569866', jobCode: 2},
    //         ]),
    //     }
    // }
    model() {
        return {
            iconInfo: '../../images/icon_info-s@3x.png',
            business: A([{
                rate: 50,
                name: '消课率',
                circleColor: A(['#3172E0', '#F4F5F7']),
                circleData:A([
                    { value: 0.5, name: '已消课' },
                    { value: 0.5, name: '未消课' }
                ])
            },{
                rate: 90,
                name: '续费率',
                circleColor: A(['#FFAB00', '#F4F5F7']),
                circleData:A([
                    { value: 0.9, name: '已续费' },
                    { value: 0.1, name: '未续费' }
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
                unit: '%',
                icon: '../../images/icon_info-s@3x.png',
            },{
                rate: 20,
                name: '准确率',
                unit: '%'
            }
            ]),
        }
    }
});
