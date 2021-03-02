
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;

var launchingForce=100

var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(2000, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1250,130,30);
	mango3=new mango(1200,100,40);
	mango4=new mango(1000,100,30);
	mango5=new mango(1150,100,40);


	

	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(235,420,30)
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
stoneObj.display();
launcherObject.display();


  groundObject.display();
}

function mouseDraged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
 function mouseReleased(){
launcherObject.fly()
 }