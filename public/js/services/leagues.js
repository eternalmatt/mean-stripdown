window.angular.module('ngff.services.leagues', [])
  .factory('Leagues', function($resource){
    return $resource('leagues/:leagueId', 
      { leagueId: '@_id' },
      { update: { method: 'PUT' } }
    );
  })
  
  .factory('LeagueCreator', function LeagueCreator(Leagues){
    return function create(league){
      var leagueRecord = new Leagues({ name: league.name });
      league.name = "";
      return leagueRecord.$save(); //a promise
    };
  })
  
  .factory('LeagueUpdater', function LeagueUpdater(){
    return function update(league){
      return league.$update(); // a promise
    };
  })
