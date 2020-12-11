class Drops{
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0.1,
            restitution:0.001
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.rain = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.rain);
    }
    display(){
        var pos = this.rain.position;
        var angle = this.rain.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.r*2,this.r*2);
        pop();
        if (this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
        }
       }
}