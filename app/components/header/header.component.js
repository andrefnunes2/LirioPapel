(function () {
	'use strict';

	angular
		.module('App')
		.controller('HeaderController', HeaderController)
		.component('appHeader', {
			templateUrl: './components/header/header.component.html',
			controller: 'HeaderController',
			controllerAs: 'vm'
		});

	HeaderController.$inject = [];

	function HeaderController() {

		var vm = this;

		init();

		function init() {}

	}

})();