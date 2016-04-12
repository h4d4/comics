
app.controller("UserController", ["$rootScope", "$scope", "$http", function ($rootScope, $scope, $http) {
    $scope.data = {};
    function setMessage() {
        $scope.message = "No existe Email ";
        console.log("No existe Email ");
    };
    setMessage();


}]);
/*
angular.module("comics", []).controller('UserController', function($scope) {  
        $scope.message = "No existe Email ";
        
    console.log("No existe Email ");
});*/