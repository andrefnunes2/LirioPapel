(function () {
	'use strict';

	angular
		.module('App')
		.controller('ContactController', ContactController)
		.component('contact', {
			templateUrl: './modules/contact/contact.html',
			controller: 'ContactController',
			controllerAs: 'vm'
		});

		ContactController.$inject = [];

	function ContactController() {

		var vm = this;

		init();

		function init() {}

	}

})();