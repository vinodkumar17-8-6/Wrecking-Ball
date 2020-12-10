
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

var ball, rope;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;

function setup() {
	createCanvas(3000, 1500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1800, 1400, 1300, 30);

	ball = new Ball(1700, 800, 100, 100);

	box1 = new Box(2000, 1500, 100, 100);
	box2 = new Box(2000, 1400, 100, 100);
	box3 = new Box(2000, 1300, 100, 100);
	box4 = new Box(2000, 1200, 100, 100);
	box5 = new Box(2000, 1100, 100, 100);
	box6 = new Box(2000, 1000, 100, 100);
	box7 = new Box(2000, 900, 100, 100);
	box8 = new Box(2000, 15000, 100, 100);
	box9 = new Box(2100, 1400, 100, 100);
	box10 = new Box(2100, 1300, 100, 100);
	box11 = new Box(2100, 1200, 100, 100);
	box12 = new Box(2100, 1100, 100, 100);
	box13 = new Box(2100, 1000, 100, 100);
	box14 = new Box(2100, 900, 100, 100);
	box15 = new Box(2100, 1500, 100, 100);
	box16 = new Box(2100, 1400, 100, 100);
	box17 = new Box(2100, 1300, 100, 100);
	box18 = new Box(2100, 1200, 100, 100);
	box19 = new Box(2200, 1100, 100, 100);
	box20 = new Box(2200, 1000, 100, 100);
	box21 = new Box(2200, 900, 100, 100);
	box22 = new Box(2200, 800, 100, 100);
	box23 = new Box(2200, 700, 100, 100);
	box24 = new Box(2200, 600, 100, 100);
	box25 = new Box(2200, 500, 100, 100);
	box26 = new Box(1800, 1500, 100, 100);
	box27 = new Box(1800, 1400, 100, 100);
	box28 = new Box(1800, 1300, 100, 100);
	box29 = new Box(1800, 1200, 100, 100);
	box30 = new Box(1800, 1100, 100, 100);
	box31 = new Box(1800, 1000, 100, 100);
	box32 = new Box(1800, 900, 100, 100);
	box33 = new Box(1800, 800, 100, 100);
	box34 = new Box(1800, 700, 100, 100);
	box35 = new Box(1800, 600, 100, 100);

	rope = new Rope(ball.body,{x:1700,y:700})
	Engine.run(engine);

}

function draw() {

	background("white");

	Engine.update(engine);

	textSize(50);
	fill("red");
	stroke("black");
	strokeWeight(4);
	text ("<<<<<>>>>> PRESS SPACE KEY TO DESTROY DESTROY BUILDING<<<<<>>>>>",800,400);

	ground.display();

	ball.display();

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();
	box20.display();
	box21.display();
	box22.display();
	box23.display();
	box24.display();
	box25.display();
	box26.display();
	box27.display();
	box28.display();
	box29.display();
	box30.display();
	box31.display();
	box32.display();
	box33.display();
	box34.display();
	box35.display();

	rope.display();
	
	drawSprites();

}
/*
function mouseDragged(){

	Matter.body.setPosition(ball.body,{x:mouseX,y:mouseY});

}
*/

function keyPressed(){
	if (keyCode === 32){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:-8000,y:-1000})

	}
}

