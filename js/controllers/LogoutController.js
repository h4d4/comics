
angular.module('comics')
.controller('LogoutController',['$scope', '$rootScope', '$location','$routeParams', "$http", Logout]);

function Logout ($scope, $rootScope, $location,$routeParams, $http) {
	$rootScope.logueado = false;
}