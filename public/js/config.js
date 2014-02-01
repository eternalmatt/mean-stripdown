//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
  
  function blankObject(){ 
    return {};
  }
  
  function findLeague(Leagues, $route) {
    return Leagues.get({ leagueId: $route.current.params.leagueId }).$promise;
  }
  
  function findLeagues(Leagues){
    var query = undefined;//not needed?
    return Leagues.query(query).$promise;
  }
  
  function findFantasyTeam(FantasyTeams, $route){
    return FantasyTeams.get({fantasyTeamId: $route.current.params.fantasyTeamId }).$promise;
  };
  
  function findFantasyTeams(FantasyTeams){
    return FantasyTeams.query().$promise;
  };
  
	
  $routeProvider.when('/', {
    templateUrl : 'views/index.html'
  })
  .when('/nflteams', {
    templateUrl: 'views/nfl/list.html'
  })
  .when('/nflteams/:nflTeamId', {
    templateUrl: 'views/nfl/view.html'
  })
  
  // leagues routes
  // subtle differences of "League" and "Leagues"
  .when('/leagues',
  { 
    templateUrl: 'views/leagues/list.html',
    controller: 'LeaguesController',
    resolve: { leagues: findLeagues }
  })
  .when('/leagues/create', 
  { 
    templateUrl: 'views/leagues/create.html',
    controller: 'LeagueController',
    resolve: { 
      league: blankObject, 
      save: 'LeagueCreator'
    }
  })  
  .when('/leagues/:leagueId/edit', 
  { 
    templateUrl: 'views/leagues/create.html',
    controller: 'LeagueController',
    resolve: { 
      league: findLeague, 
      save: 'LeagueUpdater'
    }
  })
  .when('/leagues/:leagueId', 
  { 
    templateUrl: 'views/leagues/view.html',
    controller: 'LeagueController',
    resolve: { 
      league: findLeague,
      save: blankObject
    }
  })
  
  // fantasy teams routes
  .when('/fantasyteams', 
  { 
    templateUrl: 'views/fantasyteams/list.html',
    controller: 'FantasyTeamsController',
    resolve: { fantasyteams: findFantasyTeams }
  })
  .when('/fantasyteams/create', 
  { 
    templateUrl: 'views/fantasyteams/create.html',
    controller: 'FantasyTeamController',
    resolve: { 
      fantasyteam: blankObject, 
      save: 'FantasyTeamCreator'
    }
  })  
  .when('/fantasyteams/:fantasyTeamId/edit', 
  { 
    templateUrl: 'views/fantasyteams/edit.html',
    controller: 'FantasyTeamController',
    resolve: { 
      fantasyteam: findFantasyTeam, 
      save: 'FantasyTeamUpdater'
    }
  })
  .when('/fantasyteams/:fantasyTeamId', 
  { 
    templateUrl: 'views/fantasyteams/view.html',
    controller: 'FantasyTeamController',
    resolve: { 
      fantasyteam: findFantasyTeam, 
      save: blankObject
    }
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