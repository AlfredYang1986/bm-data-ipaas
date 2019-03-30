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
                {rate: 29,circleData:A([
                    { value: 0.5, name: '已分配' },
                    { value: 0.5, name: '未分配' }
                ])},
                {rate: 99,circleData:A([
                    { value: 0.5, name: '已分配' },
                    { value: 0.5, name: '未分配' }
                ])},
            ])
        }
    }
});
