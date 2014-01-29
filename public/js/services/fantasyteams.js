window.angular.module('ngff.services.fantasyTeams', [])
  .factory('FantasyTeams', function($resource){
    return $resource('fantasyteams/:fantasyTeamId',
      { fantasyTeamId: '@_id' },
      { update: {method: 'PUT' }}
    );
  });
