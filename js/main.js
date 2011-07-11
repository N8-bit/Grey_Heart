/*
 this is the entry point to the game
*/

// singleton game entry class
game.GH = Class.create({
    initialize : function() {
        // global game things
        game.settings = {};
        game.settings.fps = 30;
        
        game.event = new game.Events();
        
        // instances of this thing
        this.gstate = new game.State();
        this.gcontroller = new game.Controller();
        this.gview = new game.View();
    },
    
    // main game initialization code
    main : function() {
        this.start_loops();
    },
    
    // start the loops
    start_loops: function() {
        setInterval(game.thread.update, 1000/game.settings.fps);
        setInterval(game.thread.render, 1000/game.settings.fps);
    }
});

// yes, this is necessary to use with setInterval,
// we need wrapper functions to call
game.thread = Module.create({
    update : function(){ game.event.trigger("update"); },
    render : function(){ game.event.trigger("render"); }
});