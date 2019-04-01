import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        xxOnClick() {
            this.transitionToRoute("page-not-found")
        }
    }
});
