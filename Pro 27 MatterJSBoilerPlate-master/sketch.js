
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof
var bob1 ,bob2 ,bob3,bob4,bob5
var chain1 ,chain2,chain3,chain4,chain5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(350,100,600,20)

	  bob1 = new Ball(350,500,50)
	  chain1 = new Chain(bob1.body,roof.body,-100,0)

    bob2 = new Ball(450,485,50)
    chain2 = new Chain(bob2.body,roof.body,-50,0)

    bob3 = new Ball(550,463,50)
    chain3 = new Chain(bob3.body,roof.body,0,0)

    bob4 = new Ball(650,433,50)
    chain4 = new Chain(bob4.body,roof.body,50,0)

    bob5 = new Ball(750,390,50)
    chain5 = new Chain(bob5.body , roof.body , 100,0)

	Engine.run(engine);
  
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }

}

function draw() {
  rectMode(CENTER);
  background(100,0,0);
  Engine.update(engine);
  
  roof.display()
  bob1.display()
  chain1.display()

  bob2.display()
  chain2.display()

  bob3.display()
  chain3.display()

  bob4.display()
  chain4.display()

  bob5.display()
  chain5.display()
  
  
  
  
  //drawSprites();
 
}





