var TCP = angular.module('TCP', ['ngRoute', 'TCPControllers']);

TCP.config(['$routeProvider', function ($routeProvider)
{
  $routeProvider.when('/sign-in', {
    templateUrl: 'templates/sign-in.html',
  }).when('/profile', {
    templateUrl: 'templates/profile.html',
  }).otherwise({
    redirectTo: window.user ? '/profile' : '/sign-in'
  });
}]);
