import Controller from '@ember/controller';
import { A } from '@ember/array';
import { computed } from '@ember/object';

export default Controller.extend({
    switchValue: 0,

    memberList: computed('switchValue', function () {
        if (this.switchValue === 0) {
            return A([
                {id: '4', name: '藏德防', sex: 1, icon:'/images/img_app_00.png', contact: '18842569864', jobCode: 0},
                {id: '5', name: '莎莎', sex: 0, icon:'/images/img_app_00.png', contact: '18842569865', jobCode: 1},
                {id: '6', name: '姚非', sex: 0, icon:'/images/img_app_00.png', contact: '18842569866', jobCode: 2},
            ])
        } else if (this.switchValue === 1) {
            return A([
                {id: '4', name: '藏德防', sex: 1, icon:'/images/img_app_00.png', contact: '18842569864', jobCode: 0},
                {id: '5', name: '莎莎', sex: 0, icon:'/images/img_app_00.png', contact: '18842569865', jobCode: 1},
                {id: '6', name: '姚非', sex: 0, icon:'/images/img_app_00.png', contact: '18842569866', jobCode: 2},
            ])
        } else if (this.switchValue === 2) {
            return A([
                {id: '4', name: '藏德防', sex: 1, icon:'/images/img_app_00.png', contact: '18842569864', jobCode: 0},
                {id: '5', name: '莎莎', sex: 0, icon:'/images/img_app_00.png', contact: '18842569865', jobCode: 1},
                {id: '6', name: '姚非', sex: 0, icon:'/images/img_app_00.png', contact: '18842569866', jobCode: 2},
            ])
        } else if (this.switchValue === 3) {
            return A([
                {id: '4', name: '藏德防', sex: 1, icon:'/images/img_app_00.png', contact: '18842569864', jobCode: 0},
                {id: '5', name: '莎莎', sex: 0, icon:'/images/img_app_00.png', contact: '18842569865', jobCode: 1},
                {id: '6', name: '姚非', sex: 0, icon:'/images/img_app_00.png', contact: '18842569866', jobCode: 2},
            ])
        }
    }),

    actions: {
        memberOnclick(param) {
            let tempModel = param
            if (tempModel.jobCode === 0) {
                this.transitionToRoute("campus-overview.ksf-diag.headmaster")
            } else if (tempModel.jobCode === 1) {
                this.transitionToRoute("campus-overview.ksf-diag.salemaster")
            } else if (tempModel.jobCode === 2) {
                this.transitionToRoute("campus-overview.ksf-diag.educationmaster")
            }
        }
    },
});
