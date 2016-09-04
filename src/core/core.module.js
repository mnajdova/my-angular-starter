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

    //$stateProvider.state("login", {
    //  url: "/login",
    //  templateUrl: 'app/modules/core/login/views/login.view.html',
    //  controller: "LoginController",
    //  controllerAs: "vm"
    //});

    $stateProvider.state("MyAngularJSStarter", {
      url: '/my',
      templateUrl: 'src/core/layout/main.html',
      controller: "MainController",
      controllerAs: 'vm'
    });


    //$stateProvider.state("TAgent.test", {
    //  parent: 'TAgent',
    //  url: '/test',
    //  data: {
    //    roles: ['ADMIN', 'USER']
    //  },
    //  template: "<h2>test test</h2>"
    //});
  }
})();

