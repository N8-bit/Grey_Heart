game.safe = Module.create({
    protect:function(obj, value){
        if( obj === null || obj === undefined ){
            return value;
        } else {
            return obj;
        }
    }
});