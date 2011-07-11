// global game model
game.Controller = Class.create({
    initialize: function() {
        game.event.register("update", function() {
            console.log("powerpuff heroes");
        });
    }
});