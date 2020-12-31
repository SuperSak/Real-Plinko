class Plinko{
    constructor(x,y,r){
        var options={
            'isStatic':true
        }
        this.body = Bodies.circle(x, y, r, options)
        World.add(world, this.body)
        this.r=r
    }
    display(r,g,b){
        var pos = this.body.position
        ellipseMode(RADIUS)
        push()
        fill(r,g,b)
        ellipse(pos.x, pos.y, this.r)
        pop()
    }
}