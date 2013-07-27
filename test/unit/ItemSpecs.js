'use strict';

/* jasmine specs for Event go here */

describe('Item', function() {
  
    // item's data objects.
    var weapon_karabiner_98 = {
        name: "Karabiner 98k",
        type: "weapon",
        bulk: 3,
        maximumStackable: 1,
        capacityBulk: 1,
        accepts: {names: {"8mm Mauser Clip":1}, types: {}} };
    
    var clip_mauser_8mm = {
        name: "8mm Mauser Clip",
        type: "clip",
        bulk: 1,
        maximumStackable: 1,
        capacityBulk: 1,
        accepts: {names: {"8mm Mauser":5}, types: {}} };
    
    var ammo_mauser_8mm = {
        name: "8mm Mauser",
        type: "ammo",
        bulk: 1,
        maximumStackable: 20,
        capacityBulk: 0,
        accepts: {names: {}, types: {}} };
    
    var box = {
        name: "box",
        type: "container",
        bulk: 1,
        maximumStackable: 1,
        capacityBulk: 5,
        accepts: {names: {}, types: {"weapon":5, "clip":5, "ammo":5}} };
    
  
    it( 'should test the constructor and the getters.', inject( function(){
        // instantiante item.
        var item = new Item( weapon_karabiner_98 );
        
        // test getters.
        expect( item.getItemName() ).toEqual( weapon_karabiner_98.name );
        expect( item.getItemType() ).toEqual( weapon_karabiner_98.type );
        expect( item.getItemBulk() ).toEqual( weapon_karabiner_98.bulk );
        expect( item.getItemAcceptsNames() ).toEqual( weapon_karabiner_98.accepts.names );
        expect( item.getItemAcceptsTypes() ).toEqual( weapon_karabiner_98.accepts.types );
    }));
    
    describe( "Item.isItemAccepted", function(){
        it( 'should return true when an item is accepted by another by name or by type. return false otherwise.', function(){
            // instantiante items.
            var item_weapon_karabiner_98    = new Item( weapon_karabiner_98 );
            var item_clip_mauser_8mm        = new Item( clip_mauser_8mm );
            var item_ammo_mauser_8mm        = new Item( ammo_mauser_8mm );
            var item_box                    = new Item( box );
            
            // accept by name or type.
            expect( item_weapon_karabiner_98.isItemAccepted( item_clip_mauser_8mm ) ).toEqual( true );
            expect( item_clip_mauser_8mm.isItemAccepted( item_ammo_mauser_8mm ) ).toEqual( true );
            expect( item_box.isItemAccepted( item_weapon_karabiner_98 ) ).toEqual( true );
            expect( item_box.isItemAccepted( item_clip_mauser_8mm ) ).toEqual( true );
            expect( item_box.isItemAccepted( item_ammo_mauser_8mm ) ).toEqual( true );
            
            // reject either by name and by type.
            expect( item_weapon_karabiner_98.isItemAccepted( item_ammo_mauser_8mm ) ).toEqual( false );
            expect( item_ammo_mauser_8mm.isItemAccepted( item_box ) ).toEqual( false );
        });
    });
    
    describe( "Item.putItem by name", function(){
        
        // instantiate a new mauser clip for this scope.
        var mauserClip  = new Item( clip_mauser_8mm );
        
        it( 'should load 5 8mm mauser bullets successfully in a clip.', function(){
            // load the mauser clip.
            for( var i = 0; i < 5; i++ )
            {
                var mauserAmmo  = new Item( ammo_mauser_8mm );
                expect( mauserClip.putItem( mauserAmmo ) ).toEqual( true );
            }
        });
        
        it( 'should return false when loading a 6th 8mm mauser bullet in a clip.', function(){
            var mauserAmmo  = new Item( ammo_mauser_8mm );
            expect( mauserClip.putItem( mauserAmmo ) ).toEqual( false );
        });
        
        it( 'should check the number of elements (item instances) in the clip.', function(){
            expect( mauserClip.countElements() ).toEqual( 1 );
        });
        
        it( 'should check if the sole element is a clip item with quantity equal to 5.', function(){
            expect( mauserClip.getItem( 0 ).getQuantity() ).toEqual( 5 );
        });
        
    });
    /*
    describe( "Item.putItem by type", function(){
        it( 'should load a Karabiner 98k with a fully loaded clip and 2 other clips, one of them with one bullet, in a box item. should fail when trying to add a single bullet', function(){
            // instantiate 3 ammo clips.
            var mauserClips  = [ new Item( clip_mauser_8mm ), new Item( clip_mauser_8mm ), new Item( clip_mauser_8mm ) ];
            
            // load one bullet into the first clip. fully load the other two clips.
            var mauserAmmo  = new Item( ammo_mauser_8mm );
            expect( mauserClips[ 0 ].putItem( mauserAmmo ) ).toEqual( true );
            
            // load a mauser clip with 4/5 bullets.
            for( var i = 0; i < 5; i++ )
            {
                mauserAmmo  = new Item( ammo_mauser_8mm );
                mauserClips[ 1 ].putItem( mauserAmmo );
                
                mauserAmmo  = new Item( ammo_mauser_8mm );
                mauserClips[ 2 ].putItem( mauserAmmo );
            }
            
            // check clips.
            expect( mauserClips[ 0 ].countElements() ).toEqual( 1 );
            expect( mauserClips[ 1 ].countElements() ).toEqual( 5 );
            expect( mauserClips[ 2 ].countElements() ).toEqual( 5 );
            
            // load a Karabiner 98k with two clips.
            var karabiner_98 = new Item( weapon_karabiner_98 );
            
            // should succeed.
            expect( karabiner_98.putItem( mauserClips[ 1 ] ) ).toEqual( true );
            
            // should fail.
            expect( karabiner_98.putItem( mauserClips[ 2 ] ) ).toEqual( false );
            
            // shove the Karabiner, and the two clips into a box object.
            var item_box = new Item( box );
            expect( item_box.putItem( karabiner_98 ) ).toEqual( true );
            expect( item_box.putItem( mauserClips[ 0 ] ) ).toEqual( true );
            expect( item_box.putItem( mauserClips[ 2 ] ) ).toEqual( true );
            
            // the box should be full.
            mauserAmmo  = new Item( ammo_mauser_8mm );
            expect( item_box.putItem( mauserAmmo ) ).toEqual( false );
        });
    });
    */
});
