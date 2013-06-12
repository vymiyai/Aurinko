'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version3', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);
