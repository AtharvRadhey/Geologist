class Stone {
    constructor(x,y,height,angle){
        var options = {
            'restitution':0.8,
            'friction':0.9,
            'density':12
        }
        this.body = Bodies.rectangle(x, y,100,height, options);
        this.width=100;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("Red");
        rect(0, 0, this.width, this.height);
        pop();
    }

}