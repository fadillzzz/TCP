var TCP = angular.module('TCP', ['ngRoute', 'TCPControllers']);

TCP.config(['$routeProvider', function ($routeProvider)
{
  $routeProvider.when('/', {
    templateUrl: 'templates/sign-in.html',
  }).otherwise({
    redirectTo: '/'
  });
}]);
