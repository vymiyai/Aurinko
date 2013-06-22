function Event()
{
    this.name = "name";
    this.value = "value";
    this.started = false;
    this.finished = false;
    
    // "event name"
    this.finishConditions = [];
    
    this.isFinished = function( eventProviderService )
    {
        if( this.finished )
            return true;
        else    
        {
            var finished = true;
            var index;
            var finishConditionsLength = this.finishConditions.length;
            /*
            for( index = 0; index < finishConditionsLength; index++ )
            {
                
            }
            */
        }
    };
    
};