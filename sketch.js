const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=225
function setup() {
  createCanvas(600,700);
  engine = Engine.create();
  world = engine.world;
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
  Engine.update(engine);

  background(0);  
  if(frameCount%30==0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
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