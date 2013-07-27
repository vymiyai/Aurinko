'use strict';

// defines an item object with container capabilities.
var Item = function( data )
{
    //__________________________________________________________________________
    // attributes.
    
    this.data           = data;
    this.elements       = [];
    this.quantity       = 1;
    this.currentBulk    = 0;
    
    //__________________________________________________________________________
    // data getters.
    
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
    
    // returns the item's capacity bulk.
    this.getItemCapacityBulk = function()
    {
        return this.data.capacityBulk;
    }
    
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
    
    //__________________________________________________________________________
    // utility methods.
    
    // checks if this item accepts another item.
    this.isItemAccepted = function( item )
    {
        var nameAccepted = item.getItemName() in this.getItemAcceptsNames();
        var typeAccepted = item.getItemType() in this.getItemAcceptsTypes();
    
        if( nameAccepted || typeAccepted )
            return true
        else
            return false
    };
    
    // returns this item's elements array's length.
    this.countElements = function()
    {
        return this.elements.length;
    };
    
    // returns this item's number of identical item.
    this.getQuantity = function()
    {
        return this.quantity;
    };
    
    // sets this item's number of identical items.
    this.setQuantity = function( qtd )
    {
        this.quantity = qtd;
    };

    //__________________________________________________________________________
    // CRUD methods. Exceptions should be handled by the caller.
    
    // equivalent to CRUD-READ.
    this.getItem = function( itemIndex )
    {
        return this.elements[ itemIndex ];
    };

    // equivalent to CRUD-CREATE.
    this.putItem = function( item )
    {
        // assume that the item can be put...
        
        // check if the item already exists in the container's elements.
        for( var index = 0; index < this.countElements(); index++ )
        {
            var storedItem = this.getItem( index );
            if( storedItem.getItemName() === item.getItemName() )
            {
                // the item exists. try to stack it if stackable.
                var quantity = storedItem.getQuantity() + item.getQuantity();
                if( quantity <= this.getItemAcceptsNames()[ item.getItemName() ] )
                {
                    // the items can be stacked.
                    
                    this.elements[ index ].setQuantity( quantity );
                    return true;
                }
                else
                {
                    // do nothing. keep searching for an item with the same name.
                    // what happens when 10 + 11 = 20 + 1
                }
            }
            else
            {
                // do nothing. try to create a new slot for the item.
            }
        }
        
        // the item doesn't exist yet.

        // check if there is enough space to store the new item.
        if( this.currentBulk + item.getItemBulk() <= this.getItemCapacityBulk() )
        {
            // there is enough bulk capacity to store the new item.
            this.elements.push( item );
            this.currentBulk += item.getItemBulk();
            return true;
        }
        else
        {
            // there is not enough capacity bulk to store the new item.
            return false;
        }
        
    };
    
    // equivalent to CRUD-UPDATE.
    this.postItem = function( itemIndex )
    {
        
    };

    // equivalent to CRUD-DELETE.
    this.deleteItem = function( itemIndex )
    {
        // delete without returning.
        array.splice( itemIndex, 1 );
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
    
    this.useItem = function()
    { 
        // do something. 
    };
    
};