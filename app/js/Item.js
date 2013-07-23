'use strict';

// defines an item object with container capabilities.
var Item = function( data )
{
    // attributes.______________________________________________________________
    
    this.data           = data;
    this.elements       = [];
    this.currentBulk    = 0;
    
    // data getters.____________________________________________________________
    
    // returns the item's name.
    this.getItemName = function()
    {
        return this.data.name;
    };
    
    // returns the item's type.
    this.getItemType = function()
    {
        return this.data.type;
    };
    
    // returns the item's bulk.
    this.getItemBulk = function()
    {
        return this.data.bulk;
    };
    
    // returns the item's maximum stackable bulk.
    this.getItemMaximumStackableBulk = function()
    {
        return this.data.maximumStackableBulk;
    };
    
    // returns the item's capacity bulk.
    this.getItemCapacityBulk = function()
    {
        return this.data.capacityBulk;
    };
    
    // returns the item's accepts' name array.
    this.getItemAcceptsNames = function()
    {
        return this.data.accepts.names;
    };
    
    // returns the item's accepts' type array.
    this.getItemAcceptsTypes = function()
    {
        return this.data.accepts.types;
    };
    
    // utility methods._________________________________________________________
    
    // checks if an item is accepted by this one.
    this.isItemAccepted = function( item )
    {
        var nameAccepted = this.getItemAcceptsNames().indexOf( item.getItemName() ) > -1;
        var typeAccepted = this.getItemAcceptsTypes().indexOf( item.getItemType() ) > -1;
    
        if( nameAccepted || typeAccepted )
            return true
        else
            return false
    };
    
    // returns the item's elements array's length.
    this.countElements = function()
    {
        return this.elements.length;
    };
    
    // puts an item in this item's elements.
    // returns true if successful, false otherwise.
    this.putItem = function( item )
    {
        // retrieve the new item's bulk.
        var newItemBulk = item.getItemBulk();
        
        // add an item to this item's elements array if the resulting current 
        // bulk is lower than this item's capacity bulk.
        if( this.currentBulk + newItemBulk <= this.getItemCapacityBulk() )
        {
            // add item, calculate new current bulk and return.
            this.elements.push( item );
            this.currentBulk = this.currentBulk +  newItemBulk;
            return true;
        }
        else
        {
            // current bulk exceeds capacity bulk.
            return false;
        }
        
    };
    
    // UNDER DEVELOPMENT._______________________________________________________
    
    // returns the item in the index position.
    // returns the item if successful, null otherwise.
    this.retrieveItem = function( index )
    {
        if( 0 <= index && index < this.countElements() )
        {
            return this.elements[ index ];
        }
        else
        {
            // the index is out of range.
            return null;
        }
    };
    
    // deletes the item in the index position.
    // returns true if successful, false otherwise.
    this.deleteItem = function( index )
    {
        
    };
    
    this.useItem = function()
    { 
        // do something. 
    };
    
};