(function () {
  'use strict';

  angular
    .module('MyAngularJSStarter.core')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$timeout', '$mdSidenav', '$log', '$localStorage'];

  /* @ngInject */
  function NavbarController($timeout, $mdSidenav, $log, $localStorage) {
    var vm = this;
    vm.title = 'NavbarController';
    vm.$storage = $localStorage;
    vm.toggleLeft = buildDelayedToggler('left');
    vm.toggleRight = buildToggler('right');
    vm.isOpenRight = function () {
      return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = vm,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function () {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      console.log("Bla " + navID);
      return debounce(function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {

      return function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  }

})();

