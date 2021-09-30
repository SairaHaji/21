class Ball {
    constructor(x, y, r) {
      let options = {
        friction: 0.3,
        restitution: 0.6 
    }
      

    this.body = Bodies.circle(x, y, r,options);
    this.r = r;
    World.add(world, this.body);
}


green(){
    let pos = this.body.position;
    fill("DarkTurquoise")
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.r, this.r)

}
    }