/*
assertion library for ensuring values in things like constructors, etc.
*/

assert = function(condition, message){
    if(!condition){
        throw new game.AssertionError(message);
    }
};

game.AssertionError = Backbone.Model.extend({
    initialize: function(message){
        this.message = message;
    },
    toString: function(){
        return "Assertion Failed: " + this.message;
    }
});