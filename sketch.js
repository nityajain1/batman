const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var umbrella;
var maxDrops = 100;
var drops = [];

function preload(){
    
    
}

function setup(){
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

   
    
}

function draw(){
    for (i = 0; i<maxDrops; i++){
      drops.push(new createDrop((0,400),random(0,400)));
    }
    
    drawSprites();
}   

