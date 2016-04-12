
app.controller('InsideCtrl', function ($scope, ngDialog) {
$scope.openSecond = function () {
ngDialog.open({
template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
plain: true,
closeByEscape: false,
controller: 'SecondModalCtrl'
});
};
});