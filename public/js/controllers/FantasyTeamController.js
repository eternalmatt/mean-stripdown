window.angular.module('ngff.controllers.fantasyTeam', [])
  .controller('FantasyTeamController', function($scope, $location, Leagues, fantasyteam, save){
    $scope.fantasyteam = fantasyteam;
    
    $scope.save = function(fantasyteam, players){
      save(fantasyteam, players).then(function(fantasyteam){
        $location.path('fantasyteams/' + fantasyteam._id);
      }, function error(e){
        console.log(e);
        $scope.errorText = "Error recording the fantasy team to database";
      });
    };

    Leagues.query(function(leagues){
      $scope.leagues = leagues;
    });
    
  });
