
angular.module('comics')
.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/bye', {
          templateUrl: 'views/logout.html',
          controller: 'LogoutController'
        }).
        when('/registro', {
          templateUrl: 'views/users.html',
          controller: 'UserController'
        }).
        when('/lista', {
          templateUrl: 'views/list.html',
          controller: 'ListController'
        }).
        otherwise({
          redirectTo: '/'
        });
}]);   
