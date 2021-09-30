class Ground{

    constructor(x, y, w, h){
        let options = {
            friction: 0.3,
            isStatic:true

        }
        
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

see(){
var zay 
zay = this.body.position
fill ("Plum")
rectMode(CENTER)
rect (zay.x,zay.y,this.w,this.h)
}


}
