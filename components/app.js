Vue.component('big-header', {
	props: [ 'message' ],
	template: '<h1 class="big-header">{{ message }}</h1>'
});

Vue.component('big-caption', {
	props: [ 'message' ],
	template: '<h4 class="big-caption">{{ message }}</h4>'
});

Vue.component('basic-button', {
	props: [ 'text' ],
	template: '<button class="basic-button">{{ text }}</button>'
});

Vue.component('paragraph', {
	props: [ 'text' ],
	template: '<p class="paragraph">{{ text }}</p>'
});

var app = new Vue({
	el: '#app',
	data: {
		title: 'Aidan Shilling',
		caption: 'Web Developer',
		about: {
			text:
				'I am a highly skilled developer and designer who can bring your business to life using modern web technologies.'
		}
	}
});
