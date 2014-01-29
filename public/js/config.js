//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
  
  function blankObject($q){ 
    return $q.when({});
  }
  
  function findLeague(Leagues, $route) {
    return Leagues.get({ leagueId: $route.current.params.leagueId }).$promise;
  }
  
  function findLeagues(Leagues){
    var query = undefined;//not needed?
    return Leagues.query(query).$promise;
  }
	
  $routeProvider.when('/', {
    templateUrl : 'views/index.html'
  })
  .when('/nflteams', {
    templateUrl: 'views/nfl/list.html'
  })
  .when('/nflteams/:nflTeamId', {
    templateUrl: 'views/nfl/view.html'
  })
  
  //leagues
  .when('/leagues',
  { 
    templateUrl: 'views/leagues/list.html',
    controller: function($scope, leagues){
      $scope.leagues = leagues;
      $scope.destroy = function(league){
        league.$remove();
        for(var i in $scope.league){
          if ($scope.leagues[i] == league){
            $scope.leagues.splice(i, 1);
          }        
        }
      };
    },
    resolve: { leagues: findLeagues }
  })
  .when('/leagues/create', 
  { 
    templateUrl: 'views/leagues/create.html',
    controller: 'LeagueController',
    resolve: { league: blankObject }
  })  
  .when('/leagues/:leagueId/edit', 
  { 
    templateUrl: 'views/leagues/edit.html',
    controller: 'LeagueController',
    resolve: { league: findLeague }
  })
  .when('/leagues/:leagueId', 
  { 
    templateUrl: 'views/leagues/view.html',
    controller: 'LeagueController',
    resolve: { league: findLeague }
  })
  
  //fantasy teams
  .when('/fantasyteams', 
  { 
    templateUrl: 'views/fantasyteams/list.html' 
  })
  .when('/fantasyteams/create', 
  { 
    templateUrl: 'views/fantasyteams/create.html' 
  })  
  .when('/fantasyteams/:leagueId/edit', 
  { 
    templateUrl: 'views/fantasyteams/edit.html' 
  })
  .when('/fantasyteams/:leagueId', 
  { 
    templateUrl: 'views/fantasyteams/view.html' 
  })
  
  
  .otherwise({
    redirectTo : '/'
  }); 

}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);