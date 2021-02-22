const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box4,box5,box6,box7,box8,box9,box10;
var ground1,ground2,ground3;
var box11,box12,box13,box14,box4,box15,box16,box17,box18,box19,box20;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,380,1200,20);
    ground2 = new Ground(500,325,300,20);
    ground3 = new Ground(1000,180,250,20)
    box1 = new Box(500,310);
    box2 = new Box(505,310);
    box3 = new Box(510,310);
    box4 = new Box(515,310);
    box5 = new Box(520,310);
    box6 = new Box(525,310);
    box7 = new Box(530,310);
    box8 = new Box(500,305);
    box9 = new Box(505,305);
    box10 = new Box(510,305);
    box11 = new Box(515,305);
    box12 = new Box(520,305);
    box13 = new Box(525,305);
    box14 = new Box(530,305);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();
    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("blue");
    box8.display();
    fill("blue");
    box9.display();
    fill("blue");
    box10.display();
    fill("blue");
    box11.display();
    fill("blue");
    box12.display();
    fill("blue");
    box13.display();
    fill("blue");
    box14.display();
 
}
