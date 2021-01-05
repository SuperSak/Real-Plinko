const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, particle, over, oover;
var idk=0
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=225;
var score=0;
var turn=0;
gameState=0;
function preload(){
  oover=loadImage('download.png')
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(600,700).mousePressed(mousePressed);
  
  ground= new Ground(width/2, height-12.5,width,25);
  for(i=0; i<=width; i+=100){
    divisions.push(new Ground(i, height-divisionHeight/2, 10, divisionHeight))
  }
  for(n=100; n<=400; n+=200){
    for(i=60; i<=599; i+=60){
      /**plinko = new Plinko(i,n,10)
      plinko.display(255,255,255);**/
      plinkos.push(new Plinko(i,n,10))
    }
  }
  for(n=200; n<=400; n+=200){
    for(i=30; i<=600; i+=60){
      /**plinko = new Plinko(i,n,10)
      plinko.display(255,255,255);**/
      plinkos.push(new Plinko(i,n,10))
    }
  }
}
function draw() {
  background(0);  
  Engine.update(engine);
  console.log(mouseX);
  push()
  fill(255,100,0);
  textSize(32)
  text("Score: "+score, 20, 40)
  pop()
  push()
  textSize(24)
  fill(200)
  text("100",30,510)
  text("500",130,510)
  text("300",230,510)
  text("200",330,510)
  text("0",440,510)
  text("400",530,510)
  pop()
  /**if(frameCount%60==0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
  }**/
  if(turn>=5){
    gameState=1
    over=createSprite(width/2, height/2)
    over.addImage(oover)
  }
  for(k=0; k<divisions.length; k++){
    divisions[k].display(255,255,255)
  }
  for(k=0; k<particles.length; k++){
    particles[k].display()
  }
  for(k=0; k<plinkos.length; k++){
    plinkos[k].display(255,255,255)
  }
  ground.display(255,255,255);
  drawSprites();
}
function mousePressed(){
  console.log("in Mouse")
   if(gameState!==1){
     turn++
     particle=new Particle(mouseX, 10,10,10);
     particles.push(particle)
   }
}