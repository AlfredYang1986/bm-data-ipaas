import Controller from '@ember/controller';
import { A } from '@ember/array';
import { computed } from '@ember/object';

export default Controller.extend({
    switchValue: 0,
    curSelectId: "",

    memberList: computed('switchValue', function () {
        if (this.switchValue === 0) {
            let tempArr = A([
                {id: '4', name: '藏德防', sex: 1, icon:'/images/img_app_00.png', contact: '18842569864', jobCode: 0},
                {id: '5', name: '莎莎', sex: 0, icon:'/images/img_app_00.png', contact: '18842569865', jobCode: 1},
                {id: '6', name: '姚非', sex: 0, icon:'/images/img_app_00.png', contact: '18842569866', jobCode: 2},
            ])
            this.set("curSelectId", tempArr.firstObject.id)
            return tempArr;
        } else if (this.switchValue === 1) {
            let tempArr = A([
                {id: '7', name: '撒旦法', sex: 1, icon:'/images/img_app_00.png', contact: '18842569864', jobCode: 3},
                {id: '8', name: '金牛', sex: 0, icon:'/images/img_app_00.png', contact: '18842569865', jobCode: 4},
            ])
            this.set("curSelectId", tempArr.firstObject.id)
            return tempArr;
        } else if (this.switchValue === 2) {
            let tempArr = A([
                {id: '9', name: '积分', sex: 1, icon:'/images/img_app_00.png', contact: '18842569864', jobCode: 5},
            ])
            this.set("curSelectId", tempArr.firstObject.id)
            return tempArr;
        } else if (this.switchValue === 3) {
            let tempArr = A([
                {id: '4', name: '藏德防', sex: 1, icon:'/images/img_app_00.png', contact: '18842569864', jobCode: 0},
                {id: '5', name: '莎莎', sex: 0, icon:'/images/img_app_00.png', contact: '18842569865', jobCode: 1},
                {id: '6', name: '姚非', sex: 0, icon:'/images/img_app_00.png', contact: '18842569866', jobCode: 2},
            ])
            this.set("curSelectId", tempArr.firstObject.id)
            return tempArr;
        }
    }),


    actions: {
        memberOnclick(param) {
            let tempModel = param;
            this.set("curSelectId", tempModel.id)

            if (tempModel.jobCode === 0) {
                this.transitionToRoute("campus-overview.ksf-diag.index");
            } else if (tempModel.jobCode === 1) {
                this.transitionToRoute("campus-overview.ksf-diag.salemaster");
            } else if (tempModel.jobCode === 2) {
                this.transitionToRoute("campus-overview.ksf-diag.educationmaster");
            } else {
                return;
            }
        }
    },
});
