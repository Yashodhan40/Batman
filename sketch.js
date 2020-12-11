const Engine =Matter.Engine;
const World =Matter.World;
const Body =Matter.Body;
const Bodies =Matter.Bodies;
var engine,world;
var boy,boy_img;
var l,i,g,h,height;
var drops=[];
var maxDrops=100;
function preload(){
    boy_img = loadImage("images/walking_5.png");
    l = loadImage("images/1.png");
    i = loadImage("images/2.png");
    g = loadImage("images/3.png");
    h = loadImage("images/4.png");
}
function setup(){
    createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;
    boy = createSprite(250,560,40,50);
    boy.addImage("b1",boy_img);
   
    boy.scale=0.4;
    //drop = new Drops(200,100,3,3);
    umb = new Umbrella(250,450,58,10);
    umb2 = new Umbrella(230,460,58,10,)
   height = 701;
   Engine.run(engine);
}

function draw(){
    background(0);
   
    //drop.display();
    umb.display();
    umb2.display()
    if (frameCount%50===0)
    {
        light = createSprite(250,20,1,1);
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: light.addImage(l);
        break;
        case 2: light.addImage(i);
        break;
        case 3: light.addImage(g);
        break;
        case 4: light.addImage(h);
        break;
        default:break;

    }
}
for (var i=0; i<maxDrops.length; i++){
    drops.push(new Drops(random(0,400),random(0,400)))
}

console.log(frameCount);
    drawSprites();
    
}   

