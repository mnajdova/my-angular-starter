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

    vm.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  }

})();

