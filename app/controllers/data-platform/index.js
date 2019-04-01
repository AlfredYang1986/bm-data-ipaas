import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
    fileList: A([
        {id: '4', name: '校区发展规划', type: 'pdf', size: '李飞', time: '2019/02/08'},
        {id: '5', name: '教师守则', type: 'doc', size: '韩林', time: '2019/02/05'},
        {id: '6', name: '潜在客户2019年3月', type: 'excel', size: '戴晨晨', time: '2019/03/08'},
        {id: '7', name: '测试文件', type: 'unknown', size: '韩林', time: '2019/02/18'},
        {id: '8', name: '教室使用章程', type: 'doc', size: '李飞', time: '2019/01/22'},
        {id: '9', name: '清明节放假通知', type: 'doc', size: '戴晨晨', time: '2019/03/25'},
    ]),
    appList: A([
        {id: '4', name: '咚哒SaaS', property: '平台', img: '/images/img_app_00.png', time: 1553933565274},
        {id: '5', name: '咚哒小程序', property: '推广平台', img: '/images/img_appapp_01.png', time: 1553933565274},
    ]),
    apiList: A([
        {id: '5', name: '大众点评', property: '分类', img: '/images/img_api_00.png', time: 1553933565274},
        {id: '6', name: '小鹅通', property: '分类', img: '/images/img_api_01.png', time: 1553933565274},
    ]),

    actions: {
        xxOnClick() {
            this.transitionToRoute("page-not-found");
        },
    }
});
