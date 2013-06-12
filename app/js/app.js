'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main', {templateUrl: 'partials/Main.html', controller: 'MainController'});
        $routeProvider.when('/options', {templateUrl: 'partials/Options.html', controller: 'OptionsController'});
        $routeProvider.otherwise({redirectTo: '/main'});
    }]);