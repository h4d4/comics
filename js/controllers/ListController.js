
angular.module('comics')
.controller("ListController", ["$rootScope", "$scope", "$http", List]);

function List($rootScope, $scope, $http) {
	$scope.currentPage = 1;
    $scope.pageSize = 10;
    //$scope.politicas = data.politicas;
    $http.get('http://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(function (r) {
        var datos = r.data;
        $scope.comics = datos;
    });
}
