class Box {
    constructor(x,y,width,height){
        var options={
            'density':0.1,
            'restitution':0.04,
            'friction': 0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

display(){
   var pos = this.body.position;
   var angle = this.body.angle;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   fill(255);
   rectMode(CENTER);
   rect(0,0,this.width,this.height);
   pop();
}
}