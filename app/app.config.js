(function () {

	'use strict';

	angular
		.module('App')
		.config(ConfigProvider)
		.run(function ($rootScope) {
			console.log("OPA");
            $rootScope.$on("$stateChangeSuccess", function (event, next, current) {
				footerBottom();
			});
        });

	ConfigProvider.$inject = [
		'$locationProvider',
		'$routeProvider'
	];

	function ConfigProvider($locationProvider,$routeProvider) 
	{
		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/home', {
			templateUrl: 	'./modules/home/home.html',
			controller: 	'HomeController',
			controllerAs: 	'vm'
		})
		.when('/sobre', {
			templateUrl: 	'./modules/about/about.html',
			controller: 	'AboutController',
			controllerAs: 	'vm'
		})
		.when('/o-que-faco', {
			templateUrl: 	'./modules/make/make.html',
			controller: 	'MakeController',
			controllerAs: 	'vm'
		})
		.when('/onde-trabalho', {
			templateUrl: 	'./modules/work/work.html',
			controller: 	'WorkController',
			controllerAs: 	'vm'
		})
		.when('/contato', {
			templateUrl: 	'./modules/contact/contact.html',
			controller: 	'ContactController',
			controllerAs: 	'vm'
		})
		.otherwise({redirectTo: '/home'});
	}

})();