'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
//  value('version', '0.1');
    value('version', '0.1').
    value('version2', '0.2').
    service('version3', function(){
        return {"wololo":"wololo"};
    }).
    service('profiles', function(){
        return [    {'name':'profile 1', 'value':'1'},
                    {'name':'profile 2', 'value':'2'},
                    {'name':'profile 3', 'value':'3'} ];
    });