(function () {
  'use strict';

  angular
    .module('MyAngularJSStarter.core')
    .controller('LeftSideMenuController', LeftSideMenuController);

  LeftSideMenuController.$inject = ['$mdSidenav', '$log'];

  /* @ngInject */
  function LeftSideMenuController($mdSidenav, $log) {
    var vm = this;
    vm.title = 'LeftSideMenuController';
    vm.close = close;

    function close() {
      $mdSidenav('left').close();
    };
  }

})();

