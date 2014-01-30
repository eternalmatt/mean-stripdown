window.angular.module('ngff.controllers.league', [])
  .controller('LeagueController', function($scope, league, save){
    $scope.league = league;
    $scope.save = save;
  })
;