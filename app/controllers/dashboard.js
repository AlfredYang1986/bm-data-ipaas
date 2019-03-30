import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
    marketArr: A([{name: '1月'}, {name: '2月'}, {name: '3月'}, {name: '4月'}, {name: '5月'}, {name: '6月'}, {name: '7月'}, {name: '8月'}, {name: '9月'}, {name: '10月'}, {name: '11月'}, {name: '12月'}]),
    cur_market: "2月",
    list: A([
        {name: '知春路校区', num: '4', master: '李飞'},
        {name: '荟聚校区', num: '5', master: '韩林'},
        {name: '朝阳大悦城校区', num: '6', master: '戴晨晨'},
        {name: '知春路校区', num: '7', master: '李飞'},
        {name: '知春路校区', num: '8', master: '李飞'},
        {name: '知春路校区', num: '9', master: '李飞'},
        {name: '知春路校区', num: '10', master: '李飞'},
    ]),
    curPage: 1,
});
