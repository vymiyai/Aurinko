'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) 
    {
        // cinematic routes.
        $routeProvider.when('/escave_cinematics', 
                            {   templateUrl:'partials/Cinematics.html', 
                                controller: 'EscaveCinematicsController' } );
        $routeProvider.when('/ingame_cinematics', 
                            {   templateUrl:'partials/Cinematics.html' } );
        
        // destination hub routes.
        $routeProvider.when('/destination_hub', 
                            {   templateUrl:'partials/DestinationHub.html' } );
        
        // escave routes.
        $routeProvider.when('/escave', 
                            {   templateUrl:'partials/Escave.html', 
                                controller: 'EscaveController' } );
        
        // menu routes.
        $routeProvider.when('/main_menu', 
                            {   templateUrl:'partials/Menu.html', 
                                controller: 'MainMenuController' } );
        $routeProvider.when('/ingame_menu', 
                            {   templateUrl:'partials/Menu.html' } );
        
        // profile routes.
        $routeProvider.when('/new_game', 
                            {   templateUrl:'partials/Profiles.html', 
                                controller: 'NewGameController' } );
        $routeProvider.when('/load_game', 
                            {   templateUrl:'partials/Profiles.html', 
                                controller: 'LoadGameController' } );
        $routeProvider.when('/save_game', 
                            {   templateUrl:'partials/Profiles.html' } );
        
        // results routes.
        $routeProvider.when('/results', 
                            {   templateUrl:'partials/Results.html' } );
        
        // trade routes.
        $routeProvider.when('/trade', 
                            {   templateUrl:'partials/Trade.html' } );
        
        // default route.
        $routeProvider.otherwise( {redirectTo:  '/main_menu' } );
    }])
    .animation('animate-enter', function() {
        return {
            setup : function(myElement) {
                myElement.css({ 'opacity': 0 });
                return {}; //if you want to share some dat between the set and start return it it can be anything
            },
            start : function(myElement, done, data) {
                myElement.delay( 250 )
                    .animate({
                        'opacity' : 1
                    }, 250, function() {
                        done()
                    });
                }
            
        }
    })    
    .animation('animate-leave', function() {
        return {
            setup : function(myElement) {
                myElement.css({ 'opacity': 1 });
                return {}; //if you want to share some dat between the set and start return it it can be anything
            },
            start : function(myElement, done, data) {
                myElement.animate({
                        'opacity' : 0
                    }, 250, function() {
                        done()
                    });
                }
            
        }
    });