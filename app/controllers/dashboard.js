import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
    marketArr: A([{name: '1月'}, {name: '2月'}]),
    cur_market: "2月",
});
