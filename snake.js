var Snake=(function() {
    const INITIAL_TAIL =4;
    var fixedTail=True;
    var intervalID;
    var tileCount=10;
    var tileSize=400/tileCount;

    const INITIAL_PLAYER= {x:Math.floor(tileCount/2), y:Math.floor(tileCount/2)};
    var velocity= {x:0, y:0};
    var player = {x:INITIAL_PLAYER.x, y:INITIAL_PLAYER.y};
    var walls=False;
    var food={x:1, y:1};
    var trail=[];
    var tail=INITIAL_TAIL;
    var reward=0;
    var points=0;
    var highScore=0;
    var Action={'none':0, 'up':1, 'down':2, 'left':3, 'right':4};
    Object.freeze(Action);
    var lastAction=Action.none;

    function setup(){
        canv=document.getElementById("gc");
        ctx=canv.getContext("2d");
        game.reset();
        }

});