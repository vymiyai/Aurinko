'use strict';

/* jasmine specs for Event go here */

describe('Item', function() {
  
    // item's data objects.
    var weapon_karabiner_98 = {
        name: "Karabiner 98k",
        type: "weapon",
        bulk: 3,
        maximumStackableBulk: 3,
        capacityBulk: 0.5,
        accepts: {names: ["8mm Mauser Clip"], types: []} };
    
    var clip_mauser_8mm = {
        name: "8mm Mauser Clip",
        type: "clip",
        bulk: 0.5,
        maximumStackableBulk: 1,
        capacityBulk: 0.25,
        accepts: {names: ["8mm Mauser"], types: []} };
    
    var ammo_mauser_8mm = {
        name: "8mm Mauser",
        type: "ammo",
        bulk: 0.05,
        maximumStackableBulk: 1,
        capacityBulk: 0,
        accepts: {names: [], types: []} };
    
    var box = {
        name: "box",
        type: "container",
        bulk: 2,
        maximumStackableBulk: 2,
        capacityBulk: 4,
        accepts: {names: [], types: ["weapon", "clip", "ammo"]} };
    
  
    it( 'should test the constructor and the getters.', inject( function(){
        // instantiante item.
        var item = new Item( weapon_karabiner_98 );
        
        // test getters.
        expect( item.getItemName() ).toEqual( weapon_karabiner_98.name );
        expect( item.getItemType() ).toEqual( weapon_karabiner_98.type );
        expect( item.getItemBulk() ).toEqual( weapon_karabiner_98.bulk );
        expect( item.getItemMaximumStackableBulk() ).toEqual( weapon_karabiner_98.maximumStackableBulk );
        expect( item.getItemCapacityBulk() ).toEqual( weapon_karabiner_98.capacityBulk );
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
        it( 'should load 5 8mm mauser bullets successfully and fail on the 6th.', function(){
            // load a mauser clip with 1/5 bullets.
            var mauserClip  = new Item( clip_mauser_8mm );
            var mauserAmmo  = new Item( ammo_mauser_8mm );
            expect( mauserClip.putItem( mauserAmmo ) ).toEqual( true );
            
            // load a mauser clip with 4/5 bullets.
            for( var i = 0; i < 3; i++ )
            {
                mauserAmmo  = new Item( ammo_mauser_8mm );
                expect( mauserClip.putItem( mauserAmmo ) ).toEqual( true );
            }
            
            // load a mauser clip with 5/5 bullets.
            mauserAmmo  = new Item( ammo_mauser_8mm );
            expect( mauserClip.putItem( mauserAmmo ) ).toEqual( true );
            
            // try to load 6/5 bullets. should fail.
            mauserAmmo  = new Item( ammo_mauser_8mm );
            expect( mauserClip.putItem( mauserAmmo ) ).toEqual( false );
        });
    });
    
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
    
});
