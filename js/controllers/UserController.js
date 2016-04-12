

angular.module('comics')
.controller("UserController", ["$rootScope", "$scope", "$http", UserController]);

function UserController($rootScope, $scope, $http) {
    $scope.data = {};
    function setMessage() {
        $scope.message = "No existe Email ";
        console.log("No existe Email ");
        
        //$('#modal').modal('hide');
    };
   swal({
                  title: "Error!",
                  text: "Usuario no registrado!",
                  confirmButtonColor: "#FF3333",
                  confirmButtonText: "Ok"
                });
    //setMessage();
}