'use strict';    

// defines a game event object with preconditions.
var Event = function( Profile )
{
    this.name           = "Event";
    this.preconditions  = [];
    this.resolved       = false;
    this.Profile        = Profile;
    
    // expression that checks if a leaf condition resolves.
    this.expression = function(){ return this.resolved; };
    
    // checks if a condition has been resolved.
    this.resolve = function()
    {
        // condition already resolved.
        if( this.resolved )
        {
            return true;
        }
        else
        {
            // this is a leaf condition. resolve expression and return.
            if( this.preconditions.length === 0 )
            {
                // return false in case of expression failure.
                if( this.expression( this.Profile ) === false )
                    return false;
            }
            else
            {
                // iterate through all preconditions.
                for( var index = 0; index < this.preconditions.length; index++ )
                {
                    var condition = this.preconditions[ index ];
                    
                    // resolve all preconditions.
                    if( condition.resolve() )
                        continue;
                    else
                        return false;
                }
            }
            
            // if the expression is true or all preconditions are true, set
            // resolved status as true and return.
            this.resolved = true;
            return true;
        }
    };
};
