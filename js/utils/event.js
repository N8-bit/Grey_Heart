game.Events = Class.create({
    initialize : function() {
        this.list = {};
    },
    // yes, this does have to be this verbose to avoid pointer swapping issues
    register : function(event_name, func) {
        this.list[event_name] = game.safe.protect(this.list[event_name], []);
        this.list[event_name].push(func);
    },
    trigger : function(event_name) {
        callbacks = this.list[event_name];
        _.each(callbacks, function(func) {
            func();
        });
    }
});
