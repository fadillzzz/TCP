var TCPServices = angular.module('TCPServices', []);

TCPServices.factory('SteamAcc', ['$http', function ($http)
{
  function SteamAcc()
  {
    this.getSteamInfo = function (callback)
    {
      $http.get('/steam-info').success(function (data)
      {
        callback(data);
      });
    };
  }

  return new SteamAcc;
}]);
