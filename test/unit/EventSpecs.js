'use strict';

/* jasmine specs for Event go here */

describe('Event', function() {
  beforeEach(module('myApp.services'));
  
    it( 'should evaluate the expression as false.', inject( function( Profile ){
        // instantiante condition.
        var condition = new Event( Profile );
        
        // evaluate condition.
        expect( condition.expression() ).toEqual( false );
    }));
    
    it( 'should evaluate the expression when there are no preconditions.', inject( function( Profile ){
        // instantiante precondition.
        var condition = new Event( Profile );
        
        // set empty preconditions.
        condition.preconditions = [];
        
        // resolve condition.
        expect( condition.resolve() ).toEqual( false );
    }));

    it( 'should return false if there is at least one precondition that is false.', inject( function( Profile ) {
        
        // false precondition.
        var falsePrecondition = new Event( Profile );
        falsePrecondition.expression = function(){ return false; };
        
        // true precondition.
        var truePrecondition = new Event( Profile );
        truePrecondition.expression = function(){ return true; };
        
        // preconditions array.
        var preconditions = [ falsePrecondition, truePrecondition ];
        
        // condition to be tested.
        var event = new Event( Profile );
        event.preconditions = preconditions;
        
        expect( event.resolve() ).toEqual( false );
    }));
    
    it( 'should return true only if all preconditions are true.', inject( function( Profile ) {
        
        // true precondition.
        var truePrecondition = new Event( Profile );
        truePrecondition.expression = function(){ return true; };
        
        // another true precondition.
        var anotherTruePrecondition = new Event( Profile );
        anotherTruePrecondition.expression = function(){ return true; };
        
        // preconditions array.
        var preconditions = [ truePrecondition, anotherTruePrecondition ];
        
        // condition to be tested.
        var event = new Event( Profile );
        event.preconditions = preconditions;
        
        expect( event.resolve() ).toEqual( true );
    }));
    
});
