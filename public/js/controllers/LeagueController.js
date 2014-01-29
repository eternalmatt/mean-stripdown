window.angular.module('ngff.controllers.leagues', [])
  .controller('LeagueController', function($scope, $routeParams, $location, Global, Leagues){
    $scope.global = Global;
    
    $scope.create = function(){
      var league = new Leagues({
        name: this.league.name
      });
      
      league.$save(function(response){
        $location.path("leagues/" + response._id);
      });
      
      this.league.name = "";
    };
    
    $scope.find = function(query){
      Leagues.query(query, function(leagues){
        $scope.leagues = leagues;
      });
    };
    
    $scope.findOne = function(){
      Leagues.get({ leagueId: $routeParams.leagueId }, function(league){
        $scope.league = league;
      });
    };
    
    $scope.update = function(){
      var league = $scope.league;
      league.$update(function(){
        $location.path('leagues/' + league._id);  
      });
    };
    
    $scope.destory = function(league){
      league.$remove();
      for(var i in $scope.league){
        if ($scope.leagues[i] == league){
          $scope.leagues.splice(i, 1);
        }        
      }
    };
    
  })
;