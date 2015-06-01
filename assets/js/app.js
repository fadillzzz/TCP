var TCP = angular.module('TCP', ['ngRoute', 'TCPControllers']);

TCP.config(['$routeProvider', function ($routeProvider)
{
  $routeProvider.when('/sign-in', {
    templateUrl: 'templates/sign-in.html',
    redirectTo: function () {
      if (window.user) {
        return '/profile';
      }
    }
  }).when('/profile', {
    templateUrl: 'templates/profile.html',
    redirectTo: function () {
      if ( ! window.user) {
        return '/sign-in';
      }
    }
  }).otherwise({
    redirectTo: window.user ? '/profile' : '/sign-in'
  });
}]);
