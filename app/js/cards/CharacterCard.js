// Classe que possui os metodos relevantes para cartas de personagem.
function CharacterCard( json )
{
    this.model = json;
    /*
    this.name = "";
    this.texture = "";
    
    this.cards = [];
    this.personality = "card";
    this.class = "card";
    this.description = "card";
    
    this.primary;
    this.secondary;
    */
    
    
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