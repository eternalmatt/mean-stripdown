window.angular.module('ngff.controllers.header', [])
  .controller('HeaderController', function($scope, Global, NavbarEntries) {
    $scope.global = Global;
    $scope.navbarEntries = NavbarEntries;
  })
  
  .constant('NavbarEntries', [{
    "title" : "Leagues",
    "link" : "leagues"
  }, {
    "title" : "Fantasy Teams",
    "link" : "fantasyteams"
  }, {
    "title" : "NFL Teams",
    "link" : "nflteams"
  }, {
    "title" : "Players",
    "link" : "players"
  }]);
