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
    .directive( 'wrapper', function() {
        return function( $scope, element, attributes ) {
            $scope.$watch( attributes.wrapper, function() {

                // game visible area dimensions.
                var w = $( '#visible-area' ).width();
                var h = $( '#visible-area' ).height();
            
                // complete visible area dimensions.
                var sw = $( window ).width();
                var sh = $( window ).height();

                // set a defined dimension so that the wrapped elements' position can be calculated.
                element.css( "height", sh );
                element.css( "width", sw );
                
                // calculate zoom factor based on the limiting dimension.
                var factor = 1.0;
                if( w/h >= sw/sh )
                    factor = sw/w;
                else
                    factor = sh/h;
                
                // apply scaling.
                $( '#visible-area' ).css( "transform", "scale( " + factor + " )" );
                
            });
        };
    });
