'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MainController', [ function() {

    }])
    .controller('OptionsController', [ '$scope', function($scope) {
        $scope.profiles = [ {'name':'profile 1', 'value':'1'},
                            {'name':'profile 2', 'value':'2'},
                            {'name':'profile 3', 'value':'3'} ];
            
        $scope.click = function( profileValue ){ alert( profileValue ); };
    }]);