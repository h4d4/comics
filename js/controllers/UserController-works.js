(function() {
    //'use strict';
    angular.module('comics')
    .controller("UserController", ["$rootScope", "$scope", "$http",'AppService', UserController]);

    function UserController($rootScope, $scope, $http, $AppService) {
        $scope.data = {};
        function setMessage() {
            $scope.message = "No existe Email ";
            console.log("No existe Email ");
        };
        setMessage();
    }
})();