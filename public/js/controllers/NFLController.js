window.angular.module('ngff.controllers.nfl', [])
  .controller('NFLController', function($scope, Global, NFL, $routeParams){
    $scope.global = Global;
    $scope.nflteams = NFL.teams;
    $scope.nflteam = NFL.teams[$routeParams.nflTeamId];
  });
