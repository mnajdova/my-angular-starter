(function () {
  'use strict';

  angular
    .module('MyAngularJSStarter.core')
    .controller('MainController', MainController);

  MainController.$inject = ['$localStorage'];

  /* @ngInject */
  function MainController($localStorage) {
    var vm = this;
    vm.title = 'MainController';
    vm.$storage = $localStorage.$default({
      'navbarColor': '#AD1457',
      'sidebarColor': '#C2185B'
    });
  }

})();