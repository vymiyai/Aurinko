'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MainController', [ '$scope', function($scope) {
        $scope.quit = function(){ alert("Exit.") };
    }])
    .controller('NewGameController', [ '$scope', 'profiles', function($scope, profiles) {
        $scope.profiles = profiles;
        
        $scope.click = function( profileValue ){ alert( "Will overwrite profile number " + profileValue ); };
    }])
    .controller('LoadProfileController', [ '$scope', 'profiles', function($scope, profiles) {
        $scope.profiles = profiles;
            
        $scope.click = function( profileValue ){ alert( "Will load profile number " + profileValue ); };
    }]);