(function () {
	'use strict';

	angular
		.module('App')
		.controller('FooterController', FooterController)
		.component('appFooter', {
			templateUrl: './components/footer/footer.component.html',
			controller: 'FooterController',
			controllerAs: 'vm'
		});

	FooterController.$inject = [];

	function FooterController() {

		var vm = this;

		init();

		function init() {}

	}

})();