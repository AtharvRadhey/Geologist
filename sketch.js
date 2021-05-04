const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone , iron , bigRubber , ball1 , ball2 , ball3 , ball4 , ball5 , ball6 ;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(300,550,100,PI/2);
    iron = new Iron(700,550,100,PI/2);
    bigRubber = new Rubber(450,580,100);
    ball1 = new Ball(550,500,30);
    ball2 = new Ball(585,500,30);
    ball3 = new Ball(620,500,30);
    ball4 = new Ball(790,500,30);
    ball5 = new Ball(830,500,30);
    ball6 = new Ball(870,500,30);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    bigRubber.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();

}