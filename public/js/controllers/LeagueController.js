window.angular.module('ngff.controllers.league', [])
  .controller('LeagueController', function($scope, $location, Leagues, league){
    $scope.league = league;
    
    $scope.create = function(){
      var league = new Leagues({
        name: this.league.name
      });
      
      league.$save(function(response){
        $location.path("leagues/" + response._id);
      });
      
      this.league.name = "";
    };
    
    $scope.update = function(){
      var league = $scope.league;
      league.$update(function(){
        $location.path('leagues/' + league._id);  
      });
    };
    
  })
;