class Papper{
    constructor(x, y, r) {
        var options = {
            'friction':1.2,
            'density':1.0
        }
        this.image=loadImage("paper.png");
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.r, this.r);
        stroke("white")
        fill("white")
        image(this.image, 100, 25, 25);
        pop();
      }
}