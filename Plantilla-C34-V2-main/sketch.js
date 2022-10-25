
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fondo;
var helicoptero
var heli

function preload(){
  fondo=loadImage("Fondo.jpg")
  heli=loadImage("heli (2).png")
}

function setup() {
  createCanvas(1300,800);

  engine = Engine.create();
  world = engine.world;
  helicoptero = Bodies.circle(200,50,150)
}


function draw() 
{
  background(fondo);
  Engine.update(engine);
  image(heli,helicoptero.position.x,helicoptero.position.y,150,150)
}

