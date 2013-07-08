'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive( 'cinematic', [ '$location', 'Animations', function( $location, animations ) {
        return function( $scope, element, attributes ) {
            $scope.$watch( attributes.cinematic, function() {
                
                // create a callback that will redirect to $scope.destination.
                var callback = function()
                {
                    $location.path( $scope.destination ); 
                    $scope.$apply();
                };
                
                animations.getAnimation( element, callback );
            });
        };
    }])
    .directive( 'wrapper', [ '$window', function( $window ) {
        return function( $scope, element, attributes ) {
            $scope.$watch( attributes.wrapper, function() {

                // game visible area dimensions.
                var w = angular.element( document.querySelector( '#visible-area' ) ).prop('offsetWidth');
                var h = angular.element( document.querySelector( '#visible-area' ) ).prop('offsetHeight');
                
                // complete visible area dimensions.
                var sw = $window.innerWidth;
                var sh = $window.innerHeight;

                // set a defined dimension so that the wrapped elements' position can be calculated.
                //element.css( "width", sw );
                //element.css( "height", sh );
                
                // calculate zoom factor based on the limiting dimension.
                var factor = 1.0;
                if( w/h >= sw/sh )
                    factor = sw/w;
                else
                    factor = sh/h;
                
                //alert( factor );
                
                // apply scaling.
                angular.element( document.querySelector( '#visible-area' ) ).css( "transform", "scale( " + factor + " )" );
                
                
            });
        };
    }]);
