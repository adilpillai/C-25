
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(600,height,1200,20); 
  box1= new Box(1050,350,20,100);
	box2= new Box(900,350,20,100);
  box3= new Box(975,390,130,20);
  paper= new Paper(100,390)
  



  
}


function draw() {
  background(0);

  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  
  drawSprites();
}


function keyPressed (){
if (keycode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-80})
}
}
