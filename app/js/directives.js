'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])
    .directive( 'cinematic', [ '$location', 'Animations', function( $location, animations ) {
        return function( $scope, element, attributes ) {
            $scope.$watch( attributes.cinematic, function() {
                var callback = function()
                {
                    $location.path( $scope.destination ); 
                    $scope.$apply();
                };
                
                animations.getAnimation( element, callback );
            });
        };
    }]);
