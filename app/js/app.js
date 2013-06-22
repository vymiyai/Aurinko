'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main', {templateUrl: 'partials/Main.html', controller: 'MainController'});
        $routeProvider.when('/new_game', {templateUrl: 'partials/Profiles.html', controller: 'NewGameController'});
        $routeProvider.when('/load_profile', {templateUrl: 'partials/Profiles.html', controller: 'LoadProfileController'});
        $routeProvider.when('/escave', {templateUrl: 'partials/Escave.html', controller: 'EscaveController'});
        $routeProvider.otherwise({redirectTo: '/main'});
    }]);