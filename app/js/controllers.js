'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MainController', [ '$scope', function($scope) {
        $scope.quit = function(){ alert("Exit.") };
    }])
    .controller('NewGameController', [ '$scope', "ProfileHandler", function($scope, profileHandler) {
        $scope.profileHandler = profileHandler;
        /*
        window.localStorage.setItem("key", JSON.stringify( { "name":"_name", "value":"_value"} ) );
        var value = window.localStorage.getItem("key");
        alert( value );
        window.localStorage.clear();
        */
        
        
        
        $scope.click = function( profileValue ){ alert( "Will overwrite profile number " + profileValue ); };
        $scope.bottomButton = {"link":"#/main", "label":"Back"};
    }])
    .controller('LoadProfileController', [ '$scope', 'profiles', function($scope, profiles) {
        $scope.profiles = profiles;
        $scope.click = function( profileValue ){ alert( "Will load profile number " + profileValue ); };
        $scope.bottomButton = {"link":"#/main", "label":"Back"};
    }])
    .controller('EscaveController', [ '$scope', 'CharacterCards', function( $scope, characterCards ) {
        alert( JSON.stringify(characterCards) );
    }]);