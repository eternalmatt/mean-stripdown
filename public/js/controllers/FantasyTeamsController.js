window.angular.module('ngff.controllers.fantasyTeams', [])
  .controller('FantasyTeamsController', function($scope, fantasyteams){
    $scope.fantasyteams = fantasyteams;
    
    $scope.remove = function(fantasyteam){
      fantasyteam.$remove();
      for(var i in $scope.fantasyteams){
        if ($scope.fantasyteams[i] == fantasyteam){
          $scope.fantasyteams.splice(i,1);
        }
      }
    };
    
  });
