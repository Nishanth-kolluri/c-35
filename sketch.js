var b1;
var position,database;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    b1 = createSprite(250,250,10,10);
    b1.shapeColor = "red";

    var b1position = database.ref("ball/position")
    b1position.on('value',readposition,showerror);
}

function draw(){
    background("white");
    if (position !== undefined){
       
    
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
 }
}


function readposition(){
  position = data.val();
  b1.x = position.x;
  b1.y = position.y;
}
function showerror(){

}
function writeposition(x,y){
    database.ref('ball/position').set({
        "x": position.x + x,
        "y": position.y + y
    })
}