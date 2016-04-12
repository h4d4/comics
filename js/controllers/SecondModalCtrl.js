app.controller('SecondModalCtrl', function ($scope, ngDialog) {
$scope.closeSecond = function () {
ngDialog.close();
};
});