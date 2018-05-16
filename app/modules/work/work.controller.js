(function () {
	'use strict';

	angular
		.module('App')
		.controller('WorkController', WorkController)
		.component('about', {
			templateUrl: './modules/work/work.html',
			controller: 'WorkController',
			controllerAs: 'vm'
		});

	WorkController.$inject = [];

	function WorkController() {

		var vm = this;

		init();

		function init() {}

	}
 
})();