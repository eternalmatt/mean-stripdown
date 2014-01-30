window.angular.module('ngff.controllers.leagues', [])
  .controller('LeaguesController', function($scope, leagues){
      $scope.leagues = leagues;
      $scope.destroy = function(league){
        league.$remove();
        for(var i in $scope.league){
          if ($scope.leagues[i] == league){
            $scope.leagues.splice(i, 1);
          }        
        }
      };
  })
;