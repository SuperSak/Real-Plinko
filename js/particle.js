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
        this.idk=idk
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
        if(this.body.position.y>=480&&this.idk<1){
            if(this.body.position.x<=100&&this.body.position.x>=0){
                score+=100
                this.idk++
            }
            if(this.body.position.x<=200&&this.body.position.x>=101){
                score+=500
                this.idk++
            }
            if(this.body.position.x<=300&&this.body.position.x>=201){
                score+=300
                this.idk++
            }
            if(this.body.position.x<=400&&this.body.position.x>=301){
                score+=200
                this.idk++
            }
            if(this.body.position.x<=500&&this.body.position.x>=401){
                score+=0
                this.idk++
            }
            if(this.body.position.x<=600&&this.body.position.x>=501){
                score+=400
                this.idk++
            }
        }
    }
}