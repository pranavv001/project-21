
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObj
var ball
var ballOptions={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(width/2,height-20,width,20)
    leftSide = new Ground(1100,height-70,20,120)
	rightSide = new Ground(1300,height-70,20,120)

	ball=Matter.Bodies.circle(50,height-200,25,ballOptions)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  rightSide.display()
  leftSide.display()
  groundObj.display()
  push()
  fill("red")
  ellipse(ball.position.x,ball.position.y,25,25)
  pop()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:150,y:-150})
	}
}

