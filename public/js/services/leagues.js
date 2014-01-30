window.angular.module('ngff.services.leagues', [])
  .factory('Leagues', function($resource){
    return $resource('leagues/:leagueId', 
      { leagueId: '@_id' },
      { update: { method: 'PUT' } }
    );
  })
  
  .factory('LeagueCreator', function LeagueCreator($location, Leagues){
    return function create(league){
      var leagueRecord = new Leagues({ name: league.name });
      leagueRecord.$save(function(response){
        $location.path("leagues/" + response._id);
      });

      league.name = "";
    };
  })
  
  .factory('LeagueUpdater', function LeagueUpdater($location){
    return function update(league){
      league.$update(function(){
        $location.path('leagues/' + league._id);  
      });
    };
  })
