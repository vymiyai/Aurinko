'use strict';

// preloads image resources and summon callback on finish.
function preloadImages( element, images, compositeCallback, callback )
{
    var loadedImages = {};
            
    var count = images.length;
    
    // if there's no images to be load, summon callback.
    if( count === 0 ) 
        compositeCallback( element, loadedImages, callback );
    
    // for reach image to be loaded, load it through jquery.
    var loaded = 0;
    $( images )
        .each( function() 
        {
            // preload image using an img HTML element.
            loadedImages[ this ] = $( '<img>' )
                .attr( 'src', this )
                .attr( 'id', this )
                .load( function() 
                {
                    // increase counter when loadin is finished.
                    loaded++;
                    
                    // on image loaded, check if all images were loaded.
                    if ( loaded === count )
                        // all images loaded. summon callback.
                        compositeCallback( element, loadedImages, callback );
                });
        });
};