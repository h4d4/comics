
angular.module('comics')
.controller('InitController', ['$scope', '$rootScope', '$location', 'AuthenticationService', '$routeParams', "$http", 
    'AppService', InitController]);

function InitController ($scope, $rootScope, $location, AuthenticationService, $routeParams, $http, AppService) {
    $scope.data = {};
    $rootScope.tituloAplicacion = "Tus Cómics";
    $scope.dataLoading = false;
    $rootScope.logueado = false;
    // reset login status
    AuthenticationService.ClearCredentials();

    $scope.login = function() { 
    $scope.dataLoading = true;
        AuthenticationService.Login($scope.user, $scope.password, function(response) {
            console.log("response");
            console.log(response);
           if(response.data_ok) {
                console.log("response.success");
                $scope.dataLoading = false;
                $rootScope.logueado = true;
                $location.path('/lista');
            }
            if(response.data_err) {
                $scope.dataLoading = false;
                $rootScope.logueado = false;
                swal({
                  title: "Error!",
                  text: "Datos Incorrectos.",
                  confirmButtonText: "Ok"
                });
            }
            if(response.email_err) {
                $scope.dataLoading = false;
                $rootScope.logueado = false;
                swal({
                  title: "Error!",
                  text: "Usuario no registrado.",
                  confirmButtonText: "Ok"
                });

            }
        }); // LOAD COMICS
    };

    $scope.ClickMeToRedirect = function () {
        document.location.href = document.location.href.split('#')[0];
    };

    $scope.logout = function() {
        AuthenticationService.Logout();
        $rootScope.logueado = false;
        //$location.path('/bye');
        $http.get("/bye");
    };

    function comicsLoad() {
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        //$scope.politicas = data.politicas;
        $http.get('http://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(function (r) {
            var datos = r.data;
            $scope.comics = datos;
        });
    };
    function setMessage() {
        $scope.message = "No existe Email ";
    };
    setMessage();
    //comicsLoad();
    
}