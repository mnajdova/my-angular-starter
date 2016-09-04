(function () {
  'use strict';

  angular
    .module('MyAngularJSStarter.core')
    .controller('RightSideMenuController', RightSideMenuController);

  RightSideMenuController.$inject = ['$mdSidenav', '$log', '$localStorage'];

  /* @ngInject */
  function RightSideMenuController($mdSidenav, $log, $localStorage) {
    var vm = this;
    vm.title = 'RightSideMenuController';
    vm.$storage = $localStorage;
    console.log(vm.$storage.sidebarThemeClass);
    vm.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  }

})();

