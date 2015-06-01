var TCP = angular.module('TCP', ['ngRoute', 'TCPControllers', 'TCPServices']);

TCP.config(['$routeProvider', function ($routeProvider)
{
  $routeProvider.when('/sign-in', {
    templateUrl: 'templates/sign-in.html',
    redirectTo: function () {
      if (window.auth) {
        return '/profile';
      }
    }
  }).when('/profile', {
    templateUrl: 'templates/profile.html',
    redirectTo: function () {
      if ( ! window.auth) {
        return '/sign-in';
      }
    }
  }).otherwise({
    redirectTo: window.auth ? '/profile' : '/sign-in'
  });
}]);
