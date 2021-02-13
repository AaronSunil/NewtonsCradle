
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ground;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(750,100,200,25);
	roof.shapeColor = color(169,169,169);

	ground = new Roof(750,300,200,10)
	ground.shapeColor = color(255,255,255)

	bobObject1 = new Bob(700,250);
	bobObject2 = new Bob(730,250);
	bobObject3 = new Bob(760,250);
	bobObject4 = new Bob(790,250);
	bobObject5 = new Bob(820,250);

	rope1 = new Rope(bobObject1.body, roof.body, 10,20);
	rope2 = new Rope(bobObject2.body, roof.body, 20,40);
	rope3 = new Rope(bobObject3.body, roof.body, 40,50);
	rope4 = new Rope(bobObject4.body, roof.body, 50,60);
	rope5 = new Rope(bobObject5.body, roof.body, 60,70);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(128,128,128);
  
  roof.display();

  ground.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}



