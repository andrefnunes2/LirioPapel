(function () {
	'use strict';

	angular
		.module('App')
		.controller('MakeController', MakeController)
		.component('make', {
			templateUrl: './modules/make/make.html',
			controller: 'MakeController',
			controllerAs: 'vm'
		});
		
	MakeController.$inject = [];

	function MakeController() {

		var vm = this;

		init();

		function init() {}

	}
	 
})();