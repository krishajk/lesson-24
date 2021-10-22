
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var button 
var angle = 60


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  button= createImg("up.png")
  button.position(300,20)
  button.size(50,50) 
  button.mouseClicked(vforce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(ground,angle )
  push ()
  translate (ground.position.x,ground.position.y)
  rotate (angle)
  rect(0,0,100,20)
  pop ()
  angle = angle+1

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}
function vforce (){
  Matter.Body.applyForce (ball,{x:0,y:0},{x:0,y:-0.1})
}
