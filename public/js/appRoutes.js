// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the TravelController
        .when('/travels', {
            templateUrl: 'views/travel.html',
            controller: 'TravelController'
        });

    $locationProvider.html5Mode(true);

}]);