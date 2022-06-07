
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
  var engine, world;
  var holder,polygon,ground;
  var stand1,stand2;
  var polygon;
  var slingShot;
  var polygon_img;
  var imgf
  
  function preload(){
   polygon_img=loadImage("nave.jpeg");
   imgf= loadImage("universo.webp")
  }
  function setup() {
   createCanvas(900,400);
   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);
   ground = new Ground();
   stand1 = new Stand(580,320,250,10);
  
   //level one
   block1 = new Block(685,275,30,40);
   block2 = new Block(656,275,30,40);
   block3 = new Block(627,275,30,40);
   block4 = new Block(598,275,30,40);
   block5 = new Block(569,275,30,40);
   block6 = new Block(540,275,30,40);
   block7 = new Block(511,275,30,40);
   //level two
   block8 = new Block(660,235,30,40);
   block9 = new Block(631,235,30,40);
 block10 = new Block(602,235,30,40);
 block11 = new Block(573,235,30,40);
 block12 = new Block(544,235,30,40);
 //level three
 block13 = new Block(573,190,30,40);
 block14 = new Block(602,190,30,40);
 block15 = new Block(631,190,30,40);
 //top
 block16 = new Block(602,150,30,40);

 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);
 slingShot = new Slingshot(this.polygon,{x:100,y:200});
}
function draw() {
 background(imgf);


 //Engine.update(engine);
 textSize(20);
 fill("lightyellow");
 text("Destrua os planetas",390,30);


 ground.display();
 fill ("blue")
 stand1.display();
 
 strokeWeight(2);
 stroke(15);
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 
 fill("gold");
 imageMode(CENTER)
 image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
 slingShot.display();
}

 

function mouseDragged(){
 Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
 slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
      
  }
 }
 




  
