window.angular.module('ngff.services.leagues', [])
  .factory('Leagues', function($resource){
    return $resource('leagues/:leagueId', 
      { leagueId: '@_id' },
      { update: { method: 'PUT' } }
    );
  });
