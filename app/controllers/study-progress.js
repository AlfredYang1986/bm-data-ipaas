import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        closeOnClick() {
            this.transitionToRoute("campus-overview.ksf-diag");
        }
    }
});
