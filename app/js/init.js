'use strict';

// initialize the default profiles if they are still not set.
var initValue = window.localStorage.getItem( "init" );
if( initValue === null )
{
    // default profile.
    var defaultProfile = JSON.stringify( { "name":"_name", "value":"_value"} );
    
    // initialize the starting profile slots.
    window.localStorage.setItem( "profile1", defaultProfile );
    window.localStorage.setItem( "profile2", defaultProfile );
    window.localStorage.setItem( "profile3", defaultProfile );
    
    window.localStorage.setItem( "init", "true" );
}