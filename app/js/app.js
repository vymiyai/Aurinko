'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) 
    {
        // menu routes.
        $routeProvider.when('/main_menu', {templateUrl: 'partials/Menu.html', controller: 'MainMenuController'});
        $routeProvider.when('/ingame_menu', {templateUrl: 'partials/Menu.html'});
        
        // trade routes.
        $routeProvider.when('/trade', {templateUrl: 'partials/Trade.html'});
        
        // profile routes.
        $routeProvider.when('/new_game', {templateUrl: 'partials/Profiles.html', controller: 'NewGameController'});
        $routeProvider.when('/load_game', {templateUrl: 'partials/Profiles.html', controller: 'LoadGameController'});
        $routeProvider.when('/save_game', {templateUrl: 'partials/Profiles.html'});
        
        // cinematic routes.
        $routeProvider.when('/escave_cinematics', {templateUrl: 'partials/Cinematics.html'});
        $routeProvider.when('/ingame_cinematics', {templateUrl: 'partials/Cinematics.html'});
        
        // escave routes.
        $routeProvider.when('/escave', {templateUrl: 'partials/Escave.html', controller: 'EscaveController'});
        
        $routeProvider.otherwise({redirectTo: '/main_menu'});
    }]);