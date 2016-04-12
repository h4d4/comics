app.controller('MainCtrl', function ($scope, $rootScope, ngDialog) {
$rootScope.jsonData = '{"foo": "bar"}';
$rootScope.theme = 'ngdialog-theme-default';

$scope.open = function () {
ngDialog.open({ template: 'firstDialogId', controller: 'InsideCtrl' });
};

$scope.openDefault = function () {
ngDialog.open({
template: 'firstDialogId',
controller: 'InsideCtrl',
className: 'ngdialog-theme-default'
});
};

$scope.openPlain = function () {
$rootScope.theme = 'ngdialog-theme-plain';

ngDialog.open({
template: 'firstDialogId',
controller: 'InsideCtrl',
className: 'ngdialog-theme-plain'
});
};

$scope.openTemplate = function () {
$scope.value = true;

ngDialog.open({
template: 'externalTemplate.html',
className: 'ngdialog-theme-plain',
scope: $scope
});
}
});