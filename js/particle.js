class Particle{
    constructor(x,y,r){
        var options={
            restitution:0.4,
            isStatic: false
        }
        this.r=r
        this.body = Bodies.circle(x, y, r, options)
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body)
    }
    display(){
      /*  var angle = this.body.angle;
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        noStroke()
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r, this.r)
        pop()*/


        push()
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r)
        pop()
        
    }
}