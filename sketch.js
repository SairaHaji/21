
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var push1
var push2
var push3

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;


  ground=new Ground(200,390,400,20)
  
  left=new Ground(10,200,20,400)

  head=new Ground(200,10,400,20)

  right=new Ground(390,200,20,400)

ball=new Ball(200,100,20)
push1=createImg("right.png")
push1.position(200,42)
push1.size (50,50)
push1.mouseClicked(notleft)

push2=createImg("up.png")
push2.position(150,100)
push2.size(50,50)
push2.mouseClicked(air)

push3=createImg("push.png")
push3.position(100,40)
push3.size(50,50)
push3.mouseClicked(yah)



  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ground.see()
  left.see()
 //top.see()
  right.see()
  head.see()
  ball.green()
}

function notleft(){

  Body.applyForce(ball.body, {x:0,y:0}, {x:0.01, y:0})

}

function air(){
  Body.applyForce(ball.body, {x:0,y:0}, {x:0, y:0.02})
}

function yah(){
  Body.applyForce(ball.body, {x:0,y:0}, {x:-0.03, y:-0.03})
}