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
			{title:'Inicio', url:'/home'},
			{title:'Sobre mim', url:'/sobre'},
			{title:'O que faço', url:'/o-que-faco'},
			{title:'Onde trabalho', url:'/onde-trabalho'},
			//{title:'Loja virtual', url:'https://www.elo7.com.br/lucianamurta', out:'_blank'},
			{title:'Contato', url:'/contato'}
		];

		init();

		function init() {
			
		}

		function getMenuActive(path) {
			return $location.path() == path;
		}
	}

})();