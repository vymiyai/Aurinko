'use strict';

// initialize the default profiles if they are still not set.
var initValue = window.localStorage.getItem( "init" );
if( initValue === null )
{
    // initialize the starting profile slots.
    window.localStorage.setItem( "Profile 1", JSON.stringify( { "name":"Profile 1", "value":"empty"} ) );
    window.localStorage.setItem( "Profile 2", JSON.stringify( { "name":"Profile 2", "value":"empty"} ) );
    window.localStorage.setItem( "Profile 3", JSON.stringify( { "name":"Profile 3", "value":"empty"} ) );
    
    window.localStorage.setItem( "init", "true" );
}

// fade in the main menu.
$( '#visible-area').ready( function(){ $( '#visible-area' ).fadeTo( 1000, 1 ); } );