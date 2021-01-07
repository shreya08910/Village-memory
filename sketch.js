
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var stone;
var ground;
var boy;
var mango1;
var bg;
var launcher;

function preload()
{
	bg = loadImage("man.jpeg");
	
}

function setup() {
	createCanvas(1280, 650);


	engine = Engine.create();
	world = engine.world;
	Boy = new Boy(230,570)
	stone = new Stone(140,500,20,20);
	tree = new Tree(1000,410,200,200);
	mango1=new Mango(900,310,20,20)
	mango2=new Mango(800,320,20,20)
	mango3=new Mango(850,360,20,20)
	mango4=new Mango(950,380,20,20)

	mango5=new Mango(950,230,20,20)
	mango6=new Mango(980,300,20,20)
	mango7=new Mango(1050,200,20,20)
	mango8=new Mango(1150,280,20,20)

	mango9=new Mango(1100,310,20,20)
	mango10=new Mango(1050,380,20,20)
	mango11=new Mango(1150,380,20,20)
	mango12=new Mango(1200,380,20,20)

	launcher=new Launcher(stone.body,{x:140,y:520})
	


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);

	background(bg);
  
	textSize(35);
  
	fill("magenta");
  
	text("Press Space to try once more!",400,150);
  
	textSize(60);
  
	fill("gold");
  
  
	text("Tasty😋Mangoes🥭",400,100);

	Boy.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	 
	stone.display();

	detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
 
}
function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}


function mouseReleased() {

	launcher.fly();
	
}


function detectCollision(lstone,lmango){


	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body,false);
      

	  }
   }
   
   function keyPressed(){

	   if(keyCode===32){

       Matter.Body.setPosition(stone.body,{x:235,y:420})
       
       launcher.attach(stone.body);
       
	   }
   }



