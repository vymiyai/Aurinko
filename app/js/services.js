'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    value('version', '0.1').
    service('Profiles', function(){
        var profile1 = JSON.parse( window.localStorage.getItem( "Profile 1" ) );
        var profile2 = JSON.parse( window.localStorage.getItem( "Profile 2" ) );
        var profile3 = JSON.parse( window.localStorage.getItem( "Profile 3" ) );
        
        return [ profile1, profile2, profile3 ];
    }).
    service('Profile', function(){
        var profileId   = "0";
        var varTable    = {};
        return { 'profileId': profileId, 'varTable': varTable };
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
    service('Animations', [ 'PreloaderService', function( PreloaderService )
    {
        var hideAnimation = function( element, callback )
        {   
            // imagens a serem carregadas.
            var images = [ "img/pagetop.gif", "img/koishi.jpg" ];
            
            //preloadImages( element, images, compositeCallback, callback );
            PreloaderService.preloadImages( images ).then( function(results){ $( "#ajax-loader" ).remove(); $( '<img src="img/pagetop.gif" />' ).appendTo( element ).fadeOut( 2000, callback ); } );
        };
        
        var hide = { getAnimation: hideAnimation };
        return hide;
    } ] ).
    factory( 'PreloaderService', [ '$q', '$http', function( $q, $http )
    {
        // objeto de retorno.
        return {
                // carrega imagens a partir de uma lista de urls.
                preloadImages: function( images ){
                    var promises = [];
                    
                    // para cada url, criar uma promise nova.
                    for( var srcIndex = 0; srcIndex < images.length; srcIndex++ ){
                        var url = images[ srcIndex ];
                        promises.push( $http.get( url ) );
                    }
                
                    // retorna as promises como uma promise unica.
                    return $q.all( promises );
                } 
            };
    } ] ).
    service('EventProvider', [ 'Profile', function( Profile ){
        
        var eventList = {
    
        };
        
        return {    'getEventByName': function( eventName ){ return eventList[ eventName ]; } };
    } ] ).
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
