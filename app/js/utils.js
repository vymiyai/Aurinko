'use strict';

function preloadImages( element, images, compositeCallback, callback )
{
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