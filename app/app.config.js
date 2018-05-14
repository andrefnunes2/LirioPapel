(function () {

	'use strict';

	angular
		.module('App')
		.config(ConfigProvider)

	ConfigProvider.$inject = [
		'$locationProvider',
		'$routeProvider'
	];

	function ConfigProvider(
		$locationProvider,
		$routeProvider
	) {

		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/', {
			templateUrl: 	'./modules/home/home.html',
			controller: 	'HomeController',
			controllerAs: 	'vm'
		})
		.when('/about', {
			templateUrl: 	'./modules/about/about.html',
			controller: 	'AboutController',
			controllerAs: 	'vm'
		});
		
	}

})();