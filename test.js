// properties are directly passed to `create` method
var Person = Class.create({
  initialize: function(name) {
    this.name = name;
  },
  say: function(message) {
    return this.name + ': ' + message;
  }
});
    
// when subclassing, specify the class you want to inherit from
var Pirate = Class.create(Person, {
  // redefine the speak method
  say: function($super, message) {
    return $super(message) + ', yarr!';
  }
});