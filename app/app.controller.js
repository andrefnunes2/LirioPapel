(function () {
	'use strict';

	angular
		.module('App')
		.controller('AppController', AppController);

	AppController.$inject = [];

	function AppController() {

		var vm = this;

		init();

		function init() {}

	}
	
})();