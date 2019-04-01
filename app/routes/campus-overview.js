import Route from '@ember/routing/route';
import {A} from '@ember/array';

export default Route.extend({
    model() {
        return {
            circleData: A([
                { value: 0.5, name: '已分配' },
                { value: 0.5, name: '未分配' }
            ]),
            circleColor: A(['#73ABFF', '#F4F5F7']),
            markering: A([
                {rate: 80, name: '实到率', circleData:A([
                    { value: 0.8, name: '实到率' },
                    { value: 0.2, name: '未到率' }
                ])},
                {rate: 90, name: '签单率', circleData:A([
                    { value: 0.9, name: '签单率' },
                    { value: 0.1, name: '未签单' }
                ])},
            ])
        }
    }
});
