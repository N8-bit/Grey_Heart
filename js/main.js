/*
 this is the entry point to the game
*/

// load up our includes for the game
yepnope("js/utils/include.js")

// boostrapper,
// gh as a shortcut to the game tree
// window.gh is a tie to the window
// game as a link for the engine
main = _.once(function(){
    window.gh = window.game = new GH;
});

// game entry class
GH = Backbone.Model.extend({
    defaults: function() {
        settings: {};
    },
    initialize: function() {
        alert ("yay");
    }
});