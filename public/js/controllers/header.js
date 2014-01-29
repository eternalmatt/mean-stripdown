window.angular.module('ngff.controllers.header', [])
  .controller('HeaderController', function($scope, Global) {
    $scope.global = Global;           
  });