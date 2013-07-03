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
    service('Animations', [ '$location', function( $location )
    {
        /*
        var preloadImages = function( element, compositeCallback, callback )
        {
            var images = [ "img/pagetop.gif" ];
            var loadedImages = {};
            
            var count = images.length;
            
            if( count === 0 ) 
                compositeCallback( element, loadedImages, callback );
                
            var loaded = 0;
            $( images )
                .each( function() 
                {
                    loadedImages[ this ] = $( '<img>' )
                        .attr( 'src', this )
                        .attr( 'id', this )
                        .load( function() 
                        {
                            loaded++;
                            if ( loaded === count )
                                compositeCallback( element, loadedImages, callback );
                        });
                });
        };
        */

        var hideAnimation = function( element, callback )
        {   
            // callback que define a logica da animacao.
            var compositeCallback = function( element, loadedImages, callback )
            {
                $( "#ajax-loader" ).remove();
                $( loadedImages[ "img/pagetop.gif" ] ).appendTo( element ).fadeOut( 2000, callback );
            };
            
            // imagens a serem carregadas.
            var images = [ "img/pagetop.gif" ];
            
            preloadImages( element, images, compositeCallback, callback );
        };
        
        var hide = { getAnimation: hideAnimation };
        return hide;
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
    
    
    