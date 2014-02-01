window.angular.module('ngff.services.players', [])
  .factory('Players', function($resource){
    return $resource('players/:playerId',
      { playerId: '@_id' }
    );
  })
