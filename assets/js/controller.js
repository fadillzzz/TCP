var TCPControllers = angular.module('TCPControllers', []);

TCPControllers.controller('SignInController', function ()
{
  console.log('loaded');
});

TCPControllers.controller('ProfileController', ['SteamAcc', '$scope', function (SteamAcc, $scope)
{
  $scope.steam = {name: null, profileUrl: null};

  SteamAcc.getSteamInfo(function (data)
  {
    $scope.steam.name = data.name;
    $scope.steam.profileUrl = data.profileUrl;
  });
}]);
