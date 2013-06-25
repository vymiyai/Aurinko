'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MainMenuController', [ '$scope', function($scope) {
        // define buttons for the menu.
        $scope.buttons = [  { value:"New Game",   href:"#/new_game" },
                            { value:"Load Game",  href:"#/load_game" },
                            { value:"Quit",       href:"#" } ];
    }])
    .controller('NewGameController', [ '$scope', "ProfileHandler", function($scope, profileHandler) {
        $scope.profileHandler = profileHandler;
        $scope.button = { value:"Back", href:"#/main_menu" };
    }])
    .controller('LoadGameController', [ '$scope', 'Profiles', 'Profile', function($scope, profiles, profile) {
        $scope.profiles = profiles;
        $scope.button = { value:"Back", href:"#/main_menu" };
        $scope.select = function( profileId ){ profile.profileId = profileId; };
        $scope.submit = function( profileId ){ alert( profileId ); };
    }])
    .controller('EscaveController', [ '$scope', 'CharacterCards', function( $scope, characterCards ) {
        alert( JSON.stringify(characterCards) );
    }])
    .controller('EscaveCinematicsController', [ '$scope', 'Profile', function( $scope, profile ) {
        alert( profile.profileId );
    }]);