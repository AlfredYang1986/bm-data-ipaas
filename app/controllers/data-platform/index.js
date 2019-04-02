import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
    fileList: A([
        {id: '4', name: '2019年度百造朝阳校区发展规划', type: 'pdf', size: '李飞', time: '2019/02/08'},
        {id: '5', name: '百造教师守则', type: 'doc', size: '韩林', time: '2019/02/05'},
        {id: '6', name: '潜在客户2019年3月', type: 'excel', size: '戴晨晨', time: '2019/03/08'},
        {id: '7', name: '教师评分考核表（2019.03）', type: 'excel', size: '韩林', time: '2019/04/02'},
        {id: '8', name: '教室使用章程', type: 'doc', size: '李飞', time: '2019/01/22'},
        {id: '9', name: '清明节休假通知', type: 'doc', size: '戴晨晨', time: '2019/03/25'},
    ]),
    appList: A([
        {id: '4', name: '咚哒SaaS', property: '平台', img: '/images/img_app_00.png', time: 1553933565274},
        {id: '5', name: '咚哒小程序', property: '推广平台', img: '/images/img_appapp_01.png', time: 1553933565274},
    ]),
    apiList: A([
        {id: '5', name: '大众点评', property: '分类', img: '/images/img_api_00.png', time: 1553933565274},
        {id: '6', name: '小鹅通', property: '分类', img: '/images/img_api_01.png', time: 1553933565274},
        {id: '6', name: '微信', property: '分类', img: '/images/logo_wechat.png', time: 1554174643688},
        {id: '6', name: '钉钉', property: '分类', img: '/images/logo_dingding.png', time: 1554174643688},
    ]),

    actions: {
        xxOnClick() {
            this.transitionToRoute("page-not-found");
        },
    }
});
