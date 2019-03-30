import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
    fileList: A([
        {id: '4', name: '知春路校区', type: 'pdf', size: '李飞', time: '2019/08/08'},
        {id: '5', name: '荟聚校区', type: 'doc', size: '韩林', time: '2019/08/08'},
        {id: '6', name: '朝阳大悦城校区', type: 'excel', size: '戴晨晨', time: '2019/08/08'},
        {id: '7', name: '知春路校区1', type: 'unknown', size: '李飞', time: '2019/08/08'},
        {id: '8', name: '知春路校区2', type: 'unknown', size: '李飞', time: '2019/08/08'},
        {id: '9', name: '知春路校区3', type: 'unknown', size: '李飞', time: '2019/08/08'},
    ]),
    appList: A([
        {id: '4', name: '咚哒SaaS', property: '平台', img: '/images/img_app_00.png', time: 1553933565274},
        {id: '5', name: '荟聚校区', property: '推广平台', img: '/images/img_app_00.png', time: 1553933565274},
        {id: '6', name: '朝阳大悦城校区', property: '推广平台', img: '/images/img_app_00.png', time: 1553933565274},
        {id: '7', name: '知春路校区1', property: '推广平台', img: '/images/img_app_00.png', time: 1553933565274},
    ]),
    apiList: A([
        {id: '4', name: '咚哒SaaS', property: '分类', img: '/images/img_app_00.png', time: 1553933565274},
        {id: '5', name: '大众点评', property: '分类', img: '/images/img_api_00.png', time: 1553933565274},
        {id: '6', name: '小天鹅', property: '分类', img: '/images/img_api_01.png', time: 1553933565274},
        {id: '7', name: '知春路校区1', property: '分类', img: '/images/img_app_00.png', time: 1553933565274},
    ]),
});
