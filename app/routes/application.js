import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(transition) {
        if (transition.intent.url === "/") {
            this.transitionTo("dashboard")
        }
    },

});
