
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin();
	ground = new Ground(600, 290, 1200, 20);
	ball = new Papper(50, 10, 50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  dustbin.display();
  ground.display();
  ball.display();
 
}
function keyPressed() {
   if (keyCode === UP_ARROW) { 
     Matter.Body.applyForce(ball.body,ball.body.position,{x:580,y:-350}); } }



