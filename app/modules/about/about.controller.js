(function () {
	'use strict';

	angular
		.module('App')
		.controller('AboutController', AboutController)
		.component('about', {
			templateUrl: './modules/about/about.html',
			controller: 'AboutController',
			controllerAs: 'vm'
		});

	AboutController.$inject = [];

	function AboutController() {

		var vm = this;

		init();

		function init() {}

	}

})();