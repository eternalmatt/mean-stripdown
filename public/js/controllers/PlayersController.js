window.angular.module('ngff.controllers.players', [])
  .controller('PlayersController', function($scope, Global, NFL, Players){
    $scope.global = Global;
    $scope.positions = NFL.positions;
    $scope.nflteams = NFL.teams;
    $scope.limitct = 10;
    
    Players.query(function(data){
      $scope.players = data;
    });
  })
