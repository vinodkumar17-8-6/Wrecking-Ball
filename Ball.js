class Ball{
    constructor(x,y,width,height){

        var options = {

            density: 10.0,
            frictionAir: 0.005

        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        
    }

    display(){

        var angle = this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0,this.width,this.height);
        pop();

    }
}