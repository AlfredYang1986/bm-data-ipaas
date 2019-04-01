import Component from '@ember/component';

export default Component.extend({
	classNames: ['bi-top-nav'],
    /**
	 * @property searchOnclick
	 * @type function
	 * @default null
	 * @public
	 */
	searchOnclick() {
    },
    /**
	 * @property notiOnClick
	 * @type function
	 * @default null
	 * @public
	 */
	notiOnClick() {
    },
    /**
	 * @property personOnclick
	 * @type function
	 * @default null
	 * @public
	 */
	personOnclick() {
    },
    

    actions: {
        onSearchClick () {
            this.get('searchOnclick')();
        },
        onNotiClick () {
            this.get('notiOnClick')();
        },
        onPersonClick () {
            this.get('personOnclick')();
        }
    },
});
