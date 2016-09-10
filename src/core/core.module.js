(function(){
  'use strict';

  angular
    .module('MyAngularJSStarter.core', [
      'MyAngularJSStarter.config'
    ]).config(initialAppStateProvider);

  initialAppStateProvider.$inject = ['$stateProvider', '$urlRouterProvider'];

  /*@ngInject*/
  function initialAppStateProvider($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/my');

    $stateProvider.state("MyAngularJSStarter", {
      url: '/my',
      templateUrl: 'src/core/layout/main/main.html',
      controller: "MainController",
      controllerAs: 'vm'
    });
  }
})();

