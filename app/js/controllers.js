'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MainController', [ '$scope', function($scope) {
        $scope.quit = function(){ alert("Exit.") };
    }])
    .controller('NewGameController', [ '$scope', function($scope) {
        $scope.profiles = [ {'name':'profile 1', 'value':'1'},
                            {'name':'profile 2', 'value':'2'},
                            {'name':'profile 3', 'value':'3'} ];
        
        $scope.click = function( profileValue ){ alert( "Will overwrite profile number " + profileValue ); };
    }])
    .controller('LoadProfileController', [ '$scope', function($scope) {
        $scope.profiles = [ {'name':'profile 1', 'value':'1'},
                            {'name':'profile 2', 'value':'2'},
                            {'name':'profile 3', 'value':'3'} ];
            
        $scope.click = function( profileValue ){ alert( "Will load profile number " + profileValue ); };
    }]);