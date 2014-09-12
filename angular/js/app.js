var myApp = angular.module('myApp', [
	'ngRoute',
	'authorControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: 'partial/list.html',
		controller: 'listController'
	}).
	when('/detail/:itemId', { 
		templateUrl: 'partial/detail.html',
		controller: 'detailController'
	}).
	otherwise({
		redirectTo:'/list'
	});
}]);

