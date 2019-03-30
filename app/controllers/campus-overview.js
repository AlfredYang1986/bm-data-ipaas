import Controller from '@ember/controller';
import {A} from '@ember/array';

export default Controller.extend({
    circleDataActual: A([
        { value: 0.8, name: '已分配' },
        { value: 0.2, name: '未分配' }
    ]),
    circleDataSigning: A([
        { value: 0.9, name: '已分' },
        { value: 0.1, name: '未分' }
    ]),
    circleColor: A(['#73ABFF', '#F4F5F7']),
    circleColor1: A(['#73ABFF', '#F4F5F7']),
});
