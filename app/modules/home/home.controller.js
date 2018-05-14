(function () {
	'use strict';

	angular
		.module('App')
		.controller('HomeController', HomeController)
		.component('home', {
			templateUrl: './modules/home/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		});

	HomeController.$inject = [];

	function HomeController() {

		var vm = this;

		init();

		function init() {}

	}

})();