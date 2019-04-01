import Controller from '@ember/controller';
import { A } from '@ember/array';
import EmberObject from '@ember/object';

export default Controller.extend({
    cycles: A([
        // {name:'本日',value: 0 },
        { name: '本周', value: 1 },
        { name: '本月', value: 2 },
    ]),
    tmpCycle: EmberObject.create({ name: '本周', value: 1 }),
});
