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
    service('Profiles', function(){
        return [    {'name':'profile 1', 'value':'1'},
                    {'name':'profile 2', 'value':'2'},
                    {'name':'profile 3', 'value':'3'} ];
    }).
    service('Profile', function(){
        var profileId = "0";
        return { 'profileId': profileId };
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
    }).
    service('CharacterCards', [ 'ItemCards', function( itemCards ){
        return {    'character1': {'name':'character 1', 'cards':[ itemCards["card1"] ]},
                    'character2': {'name':'character 2', 'cards':[ itemCards["card1"], itemCards["card2"] ]},
                    'character3': {'name':'character 3', 'cards':[ itemCards["card1"], itemCards["card2"], itemCards["card3"] ]}  };
    } ] ).
    service('ItemCards', function(){
        return {    "Medic Kit": {'name':'Medic Kit', 'value':'1'},
                    "8mm Mauser Clip": {'name':'8mm Mauser Clip', 'value':'2'},
                    "card3": {'name':'card 3', 'value':'3'} };
    }).
    service('WeaponCards', function(){
        return {    "Karabiner 98k": {'name':'Kar98k', 'value':'1'},
                    "Maschinenpistole 40": {'name':'MP40', 'value':'2'},
                    "Sturmgewehr 44": {'name':'Stg44', 'value':'3'} };
    }).
    service('PerkCards', function(){
        return {    "Jungle Style": {'name':'Jungle Style', 'description':'Submachine guns and battle rifles reload instantaneously.'},
                    "Scope": {'name':'Scope', 'description':'Rifles\' accuracy becomes 100%, rate of fire is halved.'},
                    "Camouflage": {'name':'Camouflage', 'description':'Reduces hit chances by 10%.'} };
    });
    
    
    