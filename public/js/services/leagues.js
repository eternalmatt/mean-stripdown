window.angular.module('ngff.services.leagues', [])
  .factory('Leagues', function($resource){
    return $resource('leagues/:leagueId', 
      { leagueId: '@_id' },
      { update: { method: 'PUT' } }
    );
  })
  
  .factory('LeagueCreator', function LeagueCreator($q, Leagues){
    return function create(league){
      var deferred = $q.defer();
      var leagueRecord = new Leagues({ name: league.name });
      leagueRecord.$save(deferred.resolve);

      league.name = "";
      return deferred.promise;
    };
  })
  
  .factory('LeagueUpdater', function LeagueUpdater($q){
    return function update(league){
      var deferred = $q.defer();
      league.$update(deferred.resolve);
      return deferred.promise;
    };
  })
