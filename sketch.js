
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;
var hi;
var bobObject1;
var rope1;
var bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 bobDiameter=40;
hi =new Box(400,100,400,40)
bobObject1=new Pendulum(200,500,60);
bobObject2=new Pendulum(260,500,60);
bobObject3=new Pendulum(320,500,60);
bobObject4=new Pendulum(380,500,60);
bobObject5=new Pendulum(440,500,60);


var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });

 rope1=new Rope(bobObject1.body,hi.body,-bobDiameter*4.5,0);
 rope2=new Rope(bobObject2.body,hi.body,-bobDiameter*3,0);
 rope3=new Rope(bobObject3.body,hi.body,-bobDiameter*1.5,0);
 rope4=new Rope(bobObject4.body,hi.body,-bobDiameter*0.2,0);
 rope5=new Rope(bobObject5.body,hi.body,bobDiameter*1,0);









	Engine.run(engine);
  //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("green");
  
hi.display();
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

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:-105});

	}
}