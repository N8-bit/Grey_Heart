/*
must update this script with all files in the engine
*/

game = gh = {};
game.files = [
    "js/utils/assert.js",
    "js/utils/event.js",
    "js/utils/safe.js",
    
    "js/main.js",
    
    "js/game/view.js",
    "js/game/model.js",
    "js/game/controller.js"
    ];

// system wrapper for making modules
Module = {};
Module.create = function(obj){
    return obj;
};
// end

// todo: make a module system
game.include = Module.create({
    one: function(file) {
        document.write('<script type="text/javascript" src="' + file + '"></script>');
    },
    all: function(files) {
        _.each(files, this.one);
    }
});
// end

//  THIS IS THE BIT OF CODE THAT STARTS BASICALLY EVERYTHING
_.once(function(){
    game.include.all(game.files);
})();