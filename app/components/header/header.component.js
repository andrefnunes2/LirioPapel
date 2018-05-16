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

	HeaderController.$inject = ['$location'];

	function HeaderController($location) {

		var vm = this;
		vm.getMenuActive = getMenuActive;
		vm.menu = [
			{title:'Inicio', url:'/home', out:false},
			{title:'Sobre mim', url:'/sobre', out:false},
			{title:'O que faço', url:'/o-que-faco', out:false},
			{title:'Onde trabalho', url:'/onde-trabalho', out:false},
			{title:'Loja virtual', url:'https://www.elo7.com.br/lucianamurta', out:true},
			{title:'Contato', url:'/contato', out:false}
		];

		init();

		function init() {}

		function getMenuActive(path) {
			console.log(path, $location.path().substr(0, path.length));
			return ($location.path().substr(0, path.length) == path) ? true : false;
		}
	}

})();