'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    value('version', '0.1').
    value('version2', '0.2').
    service('version3', function(){
        return {"wololo":"wololo"};
    }).
    service('profiles', function(){
        return [    {'name':'profile 1', 'value':'1'},
                    {'name':'profile 2', 'value':'2'},
                    {'name':'profile 3', 'value':'3'} ];
    }).
    service( 'ProfileHandler', function(){
        // o unico profile que precisa estar disponivel em scope eh o que sera usado durante o jogo...
        return {    "loadProfile" : function( id )
                    { 
                        var stringifiedProfileData = window.localStorage.getItem( id );
                        return JSON.parse( stringifiedProfileData );
                    },
                    "saveProfile" : function( id, profileData )
                    {
                        var stringifiedProfileData =  JSON.stringify( profileData );
                        window.localStorage.setItem( id, stringifiedProfileData );
                    },
                    "clearProfiles" : function()
                    {
                        window.localStorage.clear();
                    }
                };
    });