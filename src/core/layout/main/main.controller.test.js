describe('MainController', function () {
  var $controller;

  beforeEach(module('MyAngularJSStarter'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('defaultMenuColors', function () {
    it('The default color for the navbar and sidebar should be defined in the local storage', function () {
      var $scope = {};
      var controller = $controller('MainController', { $scope: $scope });
      expect(controller.$storage.navbarColor).toBeDefined();
      expect(controller.$storage.sidebarColor).toBeDefined();
    });
  });
});