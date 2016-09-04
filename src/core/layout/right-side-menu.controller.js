(function () {
  'use strict';

  angular
    .module('MyAngularJSStarter.core')
    .controller('RightSideMenuController', RightSideMenuController);

  RightSideMenuController.$inject = ['$mdSidenav', '$log', '$localStorage'];

  /* @ngInject */
  function RightSideMenuController($mdSidenav, $log, $localStorage) {
    var vm = this;

    vm.$storage = $localStorage;
    vm.title = 'RightSideMenuController';
    vm.close = close;

    function close() {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  }

})();

