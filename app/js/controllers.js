'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MainMenuController', [ '$scope', '$document', function($scope, $document) {
        // define buttons for the menu.
        $scope.buttons = [  { value:"New Game",   href:"#/new_game" },
                            { value:"Load Game",  href:"#/load_game" },
                            { value:"Quit",       href:"#" } ];
    }])
    .controller('EscaveController', [ '$scope', 'PreloaderService', function( $scope, PreloaderService ) {
        $scope.images = [ "img/koishi.jpg" ];
        
        // define buttons for the escave menu.
        $scope.buttons = {  trade:              { value:"TRADE"             , href:"#/trade" },
                            ingame_menu:        { value:"MENU"              , href:"#/load_game" },
                            destination_hub:    { value:"DESTINATION HUB"   , href:"#/destination_hub" } };
    }])
    .controller('EscaveCinematicsController', [ '$scope', 'Profile', '$location', function( $scope, profile, $location ) {
        $scope.cinematic = "hide";
        $scope.destination = "/escave";
    }]);