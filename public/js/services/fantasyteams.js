window.angular.module('ngff.services.fantasyTeams', [])
  .factory('FantasyTeams', function($resource){
    return $resource('fantasyteams/:fantasyTeamId',
      { fantasyTeamId: '@_id' },
      { update: {method: 'PUT' }}
    );
  })
  
  .factory('FantasyTeamCreator', function(FantasyTeams){
    return function create(fantasyteam, players){
      
      var fantasyteamRecord = new FantasyTeams({
        league: fantasyteam.league,
        name: fantasyteam.name,
        players: players
      });
      
      fantasyteam.league = "";
      fantasyteam.name = "";
      fantasyteam.players = [];
      
      return fantasyteamRecord.$save();
    };
  })
  
  .factory('FantasyTeamUpdater', function(){
    return function update(fantasyteam){
      return fantasyteam.$update();
    };
  })
  
  

/*
 function(response){
  $location.path('fantasyteam/' + response._id);
}
 */