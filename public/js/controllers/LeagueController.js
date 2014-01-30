window.angular.module('ngff.controllers.league', [])
  .controller('LeagueController', function($scope, $location, league, save){
    $scope.league = league;
    
    $scope.save = function(league){
      save(league).then(function(league){
        $location.path('leagues/' + league._id);
      });
    };
    
  })
;